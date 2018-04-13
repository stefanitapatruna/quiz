angular.module('usersModule')
		.controller('getUsersPageController', function($scope, $http, usersService, registerService){

			$scope.registeredUsers = '';

			$scope.getRegisteredUsers = function(){
				
				$http.get('/registeredUsers').then(function(response){
					$scope.registeredUsers = response.data;
				});
			};
		});