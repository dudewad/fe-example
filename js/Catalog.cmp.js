window.app = window.app || {};

(function(){
	let catalogApi;
	let categories;
	let genres;
	let initPromise;

	function Catalog() {
	}

	Catalog.prototype = {
		initialize: function () {
			if(initPromise){
				return initPromise;
			}

			initPromise = new Promise((resolve, reject) => {
				catalogApi = new app.api.CatalogAPI();
				Promise.all([
					catalogApi.getGenres(),
					catalogApi.getCategories()
				]).then(data => {
					//Operate on the original arrays to reduce memory space
					genres = data[0];
					for(let i = 0, len = genres.length; i < len; i++) {
						genres[i] = new app.model.Genre(...genres[i]);
					}

					categories = data[1];
					for (let i = 0, len = categories.length; i < len; i++) {
						categories[i] = new app.model.Category(...categories[i])
					}

					resolve({
						categories,
						genres
					});
				}).catch(err => {
					//Allow reset in case of some kind of error, so initialize can run again.
					this.initialPromise = null;
					reject(err);
				})
			});

			return initPromise;
		},

		getGenreById: function (id) {
			for (let i = 0, len = genres.length; i < len; i++) {
				let el = genres[i];
				if (el.id === parseInt(id)) {
					return el;
				}
			}
			return undefined;
		},

		getGenreByString: function (str) {
			let parts = str.split('.');
			let [, type, name] = parts;

			if (parts.length !== 3) {
				console.warn('Bad genre string when calling Catalog.getGenreByString. Aborting.');
				return undefined;
			}

			for (let i = 0, len = genres.length; i < len; i++) {
				let el = genres[i];
				if (el.objectType === type && el.genreName === name) {
					return el;
				}
			}
			return undefined;
		},

		getCategoryById: function (id) {
			for (let i = 0, len = categories.length; i < len; i++) {
				let el = categories[i];
				if (el.id === parseInt(id)) {
					return el;
				}
			}
			return undefined;
		},

		getCategoryByString: function (str) {
			let matches = str.match(/\.(.*)\.(.*):(.*)/);

			if (matches.length !== 4) {
				console.warn('Bad category string when calling Catalog.getCategoryByString. Aborting.');
				return undefined;
			}

			let [, genreType, genreName, categoryName] = matches;
			let genreId = this.getGenreByString(`genre.${genreType}.${genreName}`).id;

			for(let i = 0, len = categories.length; i < len; i++) {
				let el = categories[i];
				if(el.genreId === genreId && el.categoryName === categoryName) {
					return el;
				}
			}
			return undefined;
		}
	};

	app.component = app.component || {};
	app.component.Catalog = Catalog;
})();