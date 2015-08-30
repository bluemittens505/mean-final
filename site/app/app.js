var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate', 'firebase']);

portfolioApp.config(function ($routeProvider) {
    $routeProvider
    .when("/portfolios",  { 
        controller: "PortfolioListController", 
        templateUrl: "../partials/portfoliolist.html" })
    .when("/portfolio/:portfolio_id",  { 
        controller: "PortfolioDetailController", 
        templateUrl: "../partials/portfoliodetail.html"  })
    .when("/",  {
    	redirectTo: "/portfolios" })
    .otherwise( {
    	redirectTo: "/404_page" });
});