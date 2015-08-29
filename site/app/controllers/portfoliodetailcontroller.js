portfolioApp.controller("PortfolioDetailController", function ($scope, $routeParams, $firebaseArray){
	
	var myFirebaseRef = new Firebase("https://newport-images.firebaseio.com/portfolios");
	var portfolios = $firebaseArray(myFirebaseRef);

	var id = $routeParams.portfolio_id;

	$scope.favorites = [];
	$scope.load_error_msg = "";

	portfolios.$loaded().then( function() {

		var maxid = portfolios.length;

		if ( id < 1 || id > maxid ) {
			$scope.load_error_msg = "Cannot find the photograph details";
		} else {
			$scope.portfolio = portfolios[id - 1];
		}

		$scope.getDisabledStatus = function (id) {
			if ( id === undefined ) {
				return false;
			} else if ( portfolios[id - 1].picked == true ) {
				return true;
			} else {
				return false;
			}
		};

		$scope.addFavorite = function (new_favorite) {
			$scope.favorites.push(portfolios[new_favorite.id - 1]);
			portfolios[new_favorite.id - 1].picked = true;
		};
	})
	.catch( function(error) {
		console.log("Error:", error);
	});
});