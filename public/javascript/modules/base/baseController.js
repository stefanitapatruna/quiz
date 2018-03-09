angular.module('baseModule',['ui.router'])
	.controller('baseModuleController',['$scope', function($scope){
		$scope.myVariable= "something from angular";

		$scope.expandedTabs = {
								'home': true,
								'login': false,
								'userCP': false,
								'products': false,
								'search': false
							};
		
		$scope.toggleTab = function(tabName){
			
		}						

	}])
	.config(['$stateProvider', function($stateProvider , $urlRouterProvider){
		$stateProvider
		.state('aboutUs',{
			url:'/aboutUs',
			templateUrl:'html/pages/aboutUs.html'
		})
		.state('whatWeDo',{
			url:'/whatWeDo',
			templateUrl: 'html/pages/whatWeDo.html'
		})
		.state('contactUs',{
			url:'/contactUs',
			templateUrl: 'html/pages/contactUs.html'
		})
		.state('root',{
			url:'/',
			templateUrl:'html/pages/aboutUs.html',
		})
		.state('otherwise',{
			url:'*path',
			templateUrl:'html/pages/aboutUs.html'
		})
	}]);
