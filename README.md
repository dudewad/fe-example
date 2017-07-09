# fe-example

This project completes the following exercise. Who knows, maybe it does even more? 
It might be worth taking the time to find out...

Produce a JavaScript object called Catalog, with the following five API methods.
Optimize for time and memory performance.

    # getGenreById(id):

        Takes a numeric ID, and returns a Genre object.  Genre objects have
        the following attributes: id, object_type, genre_name, display_name.
        These fields are described in the Catalog API section below.

        Example Response:
        {
            id: 1,
            object_type: 'books',
            genre_name: 'history',
            display_name: 'History'
        }


    # getGenreByString(genreString):

        Takes a string with the format "catalog.%s.%s", where %s represent the
        "object_type" and "genre_name" attributes (described later). Returns a
        Genre object in the same format as getGenreById.

    # getCategoryById(id):

        Takes a numeric ID, and returns a Category object.  Category objects
        have the following attributes: id, genre_id, category_name,
        display_name. These fields are described in the Catalog API section.

        Example Response:

        {
            id: 1,
            genre_id: 1,
            category_name: 'ancient',
            display_name: 'Ancient History'
        }

    # getCategoryByString(categoryString):

        Takes a string with the format "catalog.%s.%s:%s", where %s represent
        the "object_type" and "genre_name" attributes from the category, and
        the "category_name" attribute from the category.  Returns a Category
        object, in the same format as getCategoryById.

    # initialize():

        Downloads data using the using the CatalogAPI. Returns a promise that
        resolves when the catalog is ready to use. This function may be called
        multiple times, but should only download the catalog data once.

        EXAMPLE USAGE:

        var c = new Catalog();

        c.initialize().then(
            function () {
                var genre1, genre2, cat1, cat2;

                // Test genre lookups
                genre1 = c.getGenreById(1);
                genre2 = c.getGenreByString('catalog.books.history');

                if (genre1.id === genre2.id) {
                    console.log(genre1.display_name + ' lookups match!');
                }

                // Test category lookups
                cat1 = c.getCategoryById(4);
                cat2 = c.getCategoryByString('catalog.books.biography:artists');

                if (cat1.id === cat2.id) {
                    console.log(cat1.display_name + ' lookups match!');
                }
            }
        );

    CATALOG API:

    You should retrieve data via the CatalogAPI object. You can assume that
    this module is already written and simply write a stub function that
    returns a promise that is immediately resolved.

    Give the CatalogAPI two methods:

    # getGenres():

        Returns a promise.  When it resolves, it returns an array of arrays,
        containing genre data.

        Each inner array represents the following fields (in order):
        id, object_type, genre_name, display_name

        Example return data:

        [
            [1, 'books', 'history', 'History'],
            [2, 'books', 'biography', 'Biography'],
            [3, 'movies', 'history', History'],
            [4, 'movies', 'adventure', 'Adventure']
        ]

    # getCategories():

        Returns a promise. When it resolves, it returns an array of arrays,
        containing category data.

        Each inner array represents the following fields (in order):
        id, genre_id, category_name, display_name

        Example return data:

        [
            [1, 1, 'ancient', 'Ancient'],
            [2, 1, 'european', 'European'],
            [3, 1, 'american', 'American'],
            [4, 2, 'artists', 'Artists'],
            [5, 2, 'presidents', 'Presidents'],
            [6, 2, 'inventors', 'Inventors'],
            [7, 3, 'french', 'French'],
            [8, 3, 'english', 'English'],
            [9, 3, 'spanish', 'Spanish'],
        ]
