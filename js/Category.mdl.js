window.app = window.app || {};

(function () {
	function Category(id, genreId, name, displayName) {
		return {
			id: parseInt(id),
			genreId: genreId,
			categoryName: name,
			displayName: displayName
		}
	}

	app.model = app.model || {};
	app.model.Category = Category;
})();
