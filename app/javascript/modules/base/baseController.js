angular.module('baseModule',['ui.router'])
	.controller('baseModuleController',['$scope', function($scope){
		$scope.myVariable= "something from angular";

	}])
	.config(['$stateProvider', function($stateProvider , $urlRouterProvider){
		$stateProvider
		.state('homepage',{
			url:'/homepage',
			templateUrl:'',
			controller: 'homepageController'
		})
		.state('root',{
			url:'/',
			templateUrl:'../../../html/pages/home.html',
		})
		.state('otherwise',{
			url:'*path',
			templateUrl:'../../../html/pages/home.html'
		})
	}]);
