angular.module('registeredUsersModule')
	.controller('registeredUsersController', ($scope, $http, usersService, registerService, helpersService) => {

		$scope.registeredUsers = '';

		$scope.getRegisteredUsers = () => {
			
			$http.get(helpersService.serverUrl('registeredUsers')).then((response) => {
				$scope.registeredUsers = response.data;
			});
		};
	});
