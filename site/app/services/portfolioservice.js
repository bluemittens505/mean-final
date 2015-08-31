portfolioApp.factory('PortfolioService', function(
    $firebase, $firebaseArray, $location, FIREBASE_URL, $routeParams){

    var myFirebaseRef = new Firebase(FIREBASE_URL + '/portfolios');
    var portfolios = $firebaseArray(myFirebaseRef);
    var favorites = [];

    // var maxid = 0;
    // myFirebaseRef.once("value", function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
    //         maxid++;
    //     });
    //     console.log(maxid);
    // });

    var myObject = {
        portfolios: function() {
            return portfolios;
        },
        orientation: function(id) {
            return portfolios[id - 1].orientation;
        },
        picked: function(id) {
            return portfolios[id - 1].picked;
        },
        maxId: function() {
            // return maxid;
            return portfolios.length;
        },
        portfolio: function(id) {
            return portfolios[id - 1];
        },
        favorites: function() {
            return favorites;
        },
        numFavorites: function() {
            return favorites.length;
        },
        addFavorite: function(id) {
            favorites.push(portfolios[id - 1]);
            portfolios[id - 1].picked = true;
        },
        resetFavorites: function() {
            favorites = [];
            for (var i = 0; i < portfolios.length; i++) {
                portfolios[i].picked = false;
            };
        }
    };

    return myObject;

}); 
