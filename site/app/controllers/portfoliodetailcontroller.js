portfolioApp.controller("PortfolioDetailController",
	function($scope,$routeParams,$location,$window,PortfolioService){
	
	var id = $routeParams.portfolio_id;
	$scope.load_error_msg = "";

	// var protocol = $location.protocol();
	// console.log(protocol);
	// var host = $location.host();
	// console.log(host);
	// var port = $location.port();
	// console.log(port);

	// console.log(PortfolioService.portfolios());
	// console.log(PortfolioService.portfolio(id));

	var maxid = PortfolioService.maxId();
	// console.log(maxid);

	if ( maxid === undefined || maxid == 0 ) {
		$scope.load_error_msg = "Data not fully loaded.  Go back to photograph list and try again.";
		//$window.location.href = protocol + '://' + host + ':' + port;
		//$location.path("/portfolios").replace();
	} else if ( id < 1 || id > maxid ) {
		$scope.load_error_msg = "Cannot find the photograph details";
	} else {
		$scope.portfolio = PortfolioService.portfolio(id);
	}

	$scope.getDisabledStatus = function (id) {
		if ( id === undefined ) {
			return false;
		} else if ( PortfolioService.picked(id) == true ) {
			return true;
		} else {
			return false;
		}
	};

	$scope.addFavorite = function (new_favorite) {
		PortfolioService.addFavorite(new_favorite.id);
	};

});