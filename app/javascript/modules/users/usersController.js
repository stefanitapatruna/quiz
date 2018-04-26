angular.module('usersModule')
		.controller('usersController', ($scope, $rootScope, $http, usersService, registerService) => {

			$scope.userFname = undefined;
			$rootScope.loggedUserData = {};

			$scope.verifUser = (user) => {
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

			$scope.login = () => {
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
							$rootScope.loggedUserData = response;
						}

					});
				}
			}

			$scope.isLogged = () => {
				if ( usersService.isLogged()) return true;
					else return false;
			}

			$scope.logOut = () => {
				sessionStorage.removeItem('userData');
				$rootScope.loggedUserData = {};
			}
		});