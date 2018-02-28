angular.module('baseModule',['ui.router'])
	.controller('baseModuleController',['$scope', function($scope){

	}])
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider , $urlRouterProvider){
		$stateProvider
		.state('homepage',{
			url:'/homepage',
			templateUrl:'../../../home.html',
			controller: 'homepageController'
		})
	}]);
