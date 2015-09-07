portfolioApp.controller('PortfolioDetailController',['$scope','$routeParams','$timeout','PortfolioService','FIREBASE_URL',
	function($scope, $routeParams, $timeout, PortfolioService, FIREBASE_URL) {

		var fbid = $routeParams.fbid;
		var ref = new Firebase(FIREBASE_URL + '/portfolios/' + fbid);
		$scope.message = '';

		ref.once("value", function(snapshot) {
			$timeout( function() {
				$scope.portfolio = snapshot.val();
			    if ( $scope.portfolio === undefined || $scope.portfolio === null ) {
			    	$scope.message = 'Cannot find the photograph details';
			    }
			}, 0);
		}, function(error) {
			$scope.message = 'Cannot find the photograph details';
		});

		$scope.isDisabled = function(id) {
			if ( PortfolioService.isFavorite(id) ) {
				return true;
			} else {
				return false;
			}
		};

		$scope.addFavorite = function (new_favorite) {
			PortfolioService.addFavorite(new_favorite);
		};

	}
]);
