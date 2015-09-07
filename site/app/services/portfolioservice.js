portfolioApp.factory('PortfolioService', [
    function() {

        var favorites = [];
        return {
            favorites: function() {
                return favorites;
            },
            numFavorites: function() {
                return favorites.length;
            },
            addFavorite: function(portfolio) {
                favorites.push(portfolio);
            },
            isFavorite: function(id) {
                var isfav = false;
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == id) {
                        isfav = true;
                    }
                };
                return isfav;
            },
            resetFavorites: function() {
                favorites = [];
            },
            getFavoriteId: function(index) {
                return favorites[index].id;
            }
        };

    }
]); 
