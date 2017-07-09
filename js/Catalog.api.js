window.app = window.app || {};

(function () {
	const apiResponseTime = 1000;

	function CatalogAPI() {
	}

	CatalogAPI.prototype = {
		categories: undefined,
		genres: undefined,

		getGenres: () => {
			// An example of result caching on a service; not necessary,
			// though potentially good for perf depending on implementation.
			// Yes, it blocks re-querying for the data, so that's something
			// that would depend on project requirements (also an easy fix).
			return this.genres
					? Promise.resolve(this.genres)
					: new Promise((resolve, reject) => {
						window.setTimeout(() => {
							this.genres = [
								[1, 'books', 'history', 'History'],
								[2, 'books', 'biography', 'Biography'],
								[3, 'movies', 'history', 'History'],
								[4, 'movies', 'adventure', 'Adventure']
							];

							resolve(this.genres);
						}, apiResponseTime);
			});
		},

		getCategories: () => {
			// (See note about about caching)
			return this.categories
					? Promise.resolve(this.categories)
					: new Promise((resolve, reject) => {
						window.setTimeout(() => {
							this.categories = [
								[1, 1, 'ancient', 'Ancient'],
								[2, 1, 'european', 'European'],
								[3, 1, 'american', 'American'],
								[4, 2, 'artists', 'Artists'],
								[5, 2, 'presidents', 'Presidents'],
								[6, 2, 'inventors', 'Inventors'],
								[7, 3, 'french', 'French'],
								[8, 3, 'english', 'English'],
								[9, 3, 'spanish', 'Spanish'],
							];
							resolve(this.categories);
						}, apiResponseTime);
			});
		}
	};

	app.api = app.api|| {};
	app.api.CatalogAPI = CatalogAPI;
})();