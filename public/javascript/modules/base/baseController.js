angular.module('baseModule',['ui.router'])
	.controller('baseModuleController',['$scope', function($scope){

		$scope.expandedTabs = {
								'home': true,
								'login': false,
								'userCP': false,
								'products': false,
								'search': false
							};
		
		$scope.toggleTab = function(tabName){
			$scope.expandedTabs[tabName] = !$scope.expandedTabs[tabName];
		}						

	}])
	.config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider , $urlRouterProvider, $locationProvider){
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
		.state('register',{
			url:'/register',
			templateUrl: 'html/pages/register.html',
			controller: 'registerController'
		})
		.state('registeredUsers',{
			url: '/registeredUsers',
			templateUrl: 'html/pages/registeredUsers.html',
			controller: 'registeredUsersController'
		})
		.state('root',{
			url:'/',
			templateUrl:'html/pages/aboutUs.html',
		})
		.state('otherwise',{
			url:'*path',
			templateUrl:'html/pages/aboutUs.html'
		});

		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({enabled:true});
	}]);
