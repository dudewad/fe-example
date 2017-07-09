window.app = window.app || {};

(function () {
	function Genre(id, type, name, displayName) {
		return {
			id: parseInt(id),
			objectType: type,
			genreName: name,
			displayName: displayName
		}
	}

	app.model = app.model || {};
	app.model.Genre = Genre;
})();