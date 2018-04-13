angular.module('usersModule')
		.controller('usersController', function($scope, $http, usersService, registerService){

			$scope.userExist = false;

			$scope.verifUser = function(user){
				if (user) {
					usersService.verifIfUsersExist(user).then(response => {
						$scope.userExist = response;
					});
				}
			}

			$scope.login = function(){
				cryptPass = registerService.encodeString($scope.loginPass);
				if ($scope.loginUser && $scope.loginPass) {
					if (usersService.login($scope.loginUser, cryptPass)) {console.log('user logat')}
					else {console.log('user nelogat')}
					}
				
			}
		});