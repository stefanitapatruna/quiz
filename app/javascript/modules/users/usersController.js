angular.module('usersModule')
		.controller('usersController', function($scope, $http, usersService, registerService){

			$scope.userExist = false;
			$scope.userFname = undefined;

			$scope.verifUser = function(user){
				if (user) {
					usersService.verifIfUsersExist(user).then(response => {
						$scope.userExist = response;
					});
				}
			}

			$scope.login = function(){
				var cryptPass = registerService.encodeString($scope.loginPass);
				if ($scope.loginUser && $scope.loginPass) {
						usersService.login($scope.loginUser, cryptPass).then(response => {
						$scope.loggedUserData = response;
						$scope.userFname = response.fname;
						//sessionStorage.setItem('userData', JSON.stringify(response));
					});
				}
			}
		});