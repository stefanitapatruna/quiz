angular.module('usersModule')
		.controller('usersController', function($scope, $http, usersService, registerService){

			$scope.registeredUsers = '';

			$scope.getRegisteredUsers = function(){
				
				$http.get('/registeredUsers').then(function(response){
					$scope.registeredUsers = response.data;
				});
			};

			$scope.verifUser = function(user){
				$scope.userExist = false;
				if (user) {
					usersService.verifIfUsersExist(user).then(response => {
						$scope.userExist = response;
					});
				}
			}

			$scope.login = function(){
				cryptPass = registerService.encodeString($scope.loginPass);
				if (usersService.login($scope.loginUser, cryptPass)) {console.log('user logat')}
					else {console.log('user nelogat')}
				
			}
		});