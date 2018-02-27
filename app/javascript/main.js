var app = angular.module("myShop",['ui.router']);

app.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('homeHtml', {
		url:'/home',
		templateUrl:'../html/home.html',
		controller: 'controllers/homeController.js'
	})
	.state('root', {
		url:'/',
		templateUrl:'../html/home.html',
		controller: 'controllers/homeController.js'
	})
}]);