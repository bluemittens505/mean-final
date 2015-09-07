var portfolioApp = angular.module('portfolioApp',['ngRoute','ngAnimate','ngSanitize','firebase']);

portfolioApp.constant('FIREBASE_URL','https://newport-images.firebaseio.com');

portfolioApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
        .when('/portfolios', { 
            controller: 'PortfolioListController', 
            templateUrl: 'partials/portfoliolist.html'
        })
        .when('/portfolio/:fbid', { 
            controller: 'PortfolioDetailController', 
            templateUrl: 'partials/portfoliodetail.html'
        })
        .when('/results', {
            controller: 'VotingResultsController',
            templateUrl: 'partials/votingresults.html'
        })
        .when('/', {
        	redirectTo: '/portfolios'
        })
        .otherwise( {
        	templateUrl: 'partials/404page.html'
        });
    }

]);
