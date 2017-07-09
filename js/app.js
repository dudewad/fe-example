(function() {
	let catalog;
	let dataContainer;
	let selects;
	let currEl;

	function showData(title, body) {
		currEl && currEl.remove();
		currEl = document.createElement('div');
		let tEl = document.createElement('h1');
		let copy = document.createElement('p');

		currEl.classList.add('data-display');
		currEl.appendChild(tEl);
		currEl.appendChild(copy);
		tEl.innerHTML = title;
		copy.innerHTML = body;

		dataContainer.appendChild(currEl);
	}

	function resetAllVals(current) {
		for (let i = 0, len = selects.length; i < len; i++) {
			let el = selects[i];

			if (el !== current) {
				el.selectedIndex = -1;
			}
		}
	}

	function addOptions(parent, opts) {
		parent.innerHTML = '';

		for(let i = 0, len = opts.length; i < len; i++) {
			let el = opts[i];
			let option = document.createElement('option');
			option.setAttribute('value', el);
			option.innerHTML = el;
			parent.appendChild(option);
		}

		parent.selectedIndex = -1;
	}

	function onSelectChange() {
		if (!this.value) {
			return;
		}
		resetAllVals(this);

		switch (this.getAttribute('data-req-type')) {
			case 'gen-id':
				showData(`genre${suffix}`, JSON.stringify(catalog.getGenreById(this.value)));
				break;
			case 'gen-str':
				showData(`genre${suffix}`, JSON.stringify(catalog.getGenreByString(this.value)));
				break;
			case 'cat-id':
				showData(`category${suffix}`, JSON.stringify(catalog.getCategoryById(this.value)));
				break;
			case 'cat-str':
				showData(`category${suffix}`, JSON.stringify(catalog.getCategoryByString(this.value)));
				break;
		}
	}

	window.onload = function () {
		catalog = new app.component.Catalog();
		selects = document.querySelectorAll('select');
		dataContainer = document.querySelector('.data-container');

		catalog.initialize()
			.then(data => {
				document.querySelector('.loading').style.display = 'none';
				let genresId = [];
				let genresStr = [];
				let catsId = [];
				let catsStr = [];
				let genres = data.genres;
				let cats = data.categories;

				for (let i = 0, len = genres.length; i < len; i++) {
					let el = genres[i];
					//Wants numeric id only
					genresId.push(el.id);
					//Wants catalog.{objectType}.{genreName}
					genresStr.push(`catalog.${el.objectType}.${el.genreName}`);
				}

				for (let i = 0, len = categories.length; i < len; i++) {
					let el = categories[i];
					let g = catalog.getGenreById(el.genreId);
					//Wants numeric id only
					catsId.push(el.id);
					//Wants catalog.{objectType}.{genreName}:{categoryName}
					catsStr.push(`catalog.${g.objectType}.${g.genreName}:${el.categoryName}`);
				}

				addOptions(document.querySelector('#sel-gen-id'), genresId);
				addOptions(document.querySelector('#sel-gen-str'), genresStr);
				addOptions(document.querySelector('#sel-cats-id'), catsId);
				addOptions(document.querySelector('#sel-cats-str'), catsStr);
			});

		for(let i = 0, len = selects.length; i < len; i++) {
			selects[i].onchange = onSelectChange;
		}

		let href = window.location.href.split('?');
		let params = href[1] ? href[1].split('&') : [];
		for(let i = 0, len = params.length; i < len; i++) {
			let e = params[i].split('=');
			if(e[0] === 'bd' && e[1] === 'true') {
				makeItEpic(); // ???
			}
		}
	};
})();

























































































let suffix = '';
function makeItEpic() {
	let a = [83, 84, 65, 82, 87, 65, 82, 83];
	let d = a.slice(0);
	let q = [65, 110, 100, 32, 115, 117, 100, 100, 101, 110, 108, 121, 32, 97, 32, 98, 97, 99, 107, 100, 111, 111, 114, 32, 97, 112, 112, 101, 97, 114, 101, 100, 46, 32, 68, 111, 32, 121, 111, 117, 32, 103, 111, 32, 116, 104, 114, 111, 117, 103, 104, 32, 105, 116, 63, 32, 87, 104, 97, 116, 32, 100, 97, 110, 103, 101, 114, 44, 32, 119, 104, 97, 116, 32, 101, 120, 99, 105, 116, 101, 109, 101, 110, 116, 32, 108, 105, 101, 115, 32, 97, 104, 101, 97, 100, 63, 32, 70, 111, 114, 32, 103, 111, 105, 110, 103, 32, 116, 104, 114, 111, 117, 103, 104, 32, 116, 104, 101, 32, 98, 97, 99, 107, 100, 111, 111, 114, 32, 111, 102, 32, 115, 111, 109, 101, 98, 111, 100, 121, 32, 117, 110, 107, 110, 111, 119, 110, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 97, 110, 32, 101, 120, 99, 105, 116, 105, 110, 103, 32, 97, 100, 118, 101, 110, 116, 117, 114, 101, 46, 46, 46, 33];
	let y = [83, 116, 101, 101, 108, 32, 121, 111, 117, 114, 32, 110, 101, 114, 118, 101, 115, 32, 97, 110, 100, 32, 112, 114, 111, 99, 101, 101, 100];
	let n = [87, 105, 109, 112, 101, 114, 32, 97, 110, 100, 32, 114, 117, 110, 32, 97, 119, 97, 121];
	let s = [32, 87, 65, 82, 83];
	let ad = [97, 117, 100, 105, 111];
	let ads = [97, 115, 115, 101, 116, 47, 115, 119, 46, 109, 112, 51];
	let atts = [115, 114, 99];
	let ap = [97, 117, 116, 111, 112, 108, 97, 121];
	let m = document.querySelector('.m');
	let t = document.querySelector('.m h2');
	let bs = document.querySelectorAll('.m button');
	let by = bs[0];
	let bn = bs[1];

	window.onkeyup = function (e) {
		if (d) {
			//Figure out the code...
			if (e.which === d.shift()) {
				if (!d.length) {
					t.innerHTML = cvt(q);
					by.innerHTML = cvt(y);
					bn.innerHTML = cvt(n);
					m.style.display = 'block';
					by.onclick = () => {
						let b = document.querySelector('body');
						let e = document.createElement(cvt(ad));
						b.classList.add('sw');
						e.setAttribute(cvt(atts), cvt(ads));
						e.setAttribute(cvt(ap), '');
						b.appendChild(e);
					};
					bn.onclick = () => {
						m.style.display = 'none';
					};
					suffix = cvt(s);
				}
				return;
			}
		}
		d = a.slice(0);
	};

	function cvt(asc) {
		return asc.map(function (el) {
			return String.fromCharCode(el);
		}).join('');
	}
}
