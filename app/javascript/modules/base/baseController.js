angular.module('baseModule',['ui.router'])
	.controller('baseModuleController',['$scope','usersService', ($scope, usersService) => {

		$scope.expandedTabs = {
								'home': true,
								'login': false,
								'userCP': false,
								'products': false,
								'search': false
							};
		
		$scope.toggleTab = (tabName) => {
			$scope.expandedTabs[tabName] = !$scope.expandedTabs[tabName];
		}	

		$scope.isLogged = () => {
				if ( usersService.isLogged()) return true;
					else return false;
			}
					
	}])
	.config(['$stateProvider','$urlRouterProvider','$locationProvider', ($stateProvider , $urlRouterProvider, $locationProvider) => {
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
		})
		.state('profile',{
			url: '/profile',
			templateUrl: 'html/pages/profile.html',
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
