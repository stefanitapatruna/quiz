angular.module('usersModule')
		.controller('usersController', function($scope, $http, usersService, registerService){

			$scope.userFname = undefined;
			$scope.loggedUserData = {};

			$scope.verifUser = function(user){
				$scope.loginError = false; 
				$scope.loginErrorMessage = '';

				if (user) {
					usersService.verifIfUsersExist(user).then(response => {
						if (!response) {
							$scope.loginError = true; 
							$scope.loginErrorMessage = 'This user doesn\'t exist';
						}
					});
				}
			}

			$scope.login = function(){
				$scope.loginError = false; 
				$scope.loginErrorMessage = '';

				var cryptPass = registerService.encodeString($scope.loginPass);

				if (!$scope.loginUser || !$scope.loginPass) {
					$scope.loginError = true; 
					if (!$scope.loginUser) {$scope.loginErrorMessage = 'user is required'}
							else {$scope.loginErrorMessage = 'password is required'}
				}

				if (!$scope.loginError) {
						usersService.login($scope.loginUser, cryptPass).then(response => {
						if (response == null) {
							$scope.loginError = true; 
							$scope.loginErrorMessage = 'Wrong password !';
						} else {							
							// memory the user data in sessionStorage
							sessionStorage.userData =  JSON.stringify(response);
							$scope.loggedUserData = response;
						}

					});
				}
			}

			$scope.isLogged = function(){
				if ( usersService.isLogged()) return true;
					else return false;
			}

			$scope.logOut = function() {
				sessionStorage.removeItem('userData');
				$scope.loggedUserData = {};
			}
		});