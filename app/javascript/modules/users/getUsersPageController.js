angular.module('usersModule')
		.controller('getUsersPageController', function($scope, $http, usersService, registerService, helpersService){

			$scope.registeredUsers = '';

			$scope.getRegisteredUsers = function(){
				
				$http.get(helpersService.serverUrl('registeredUsers')).then(function(response){
					$scope.registeredUsers = response.data;
				});
			};
		});