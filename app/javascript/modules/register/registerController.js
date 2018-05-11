angular.module('registerModule')
	.controller('registerController', ($scope, registerService, usersService) => {

		//variable for select age field
		$scope.minAge = 18; 
		$scope.maxAge = 99;
		$scope.ages = [];

		$scope.viewPassword = '';
		$scope.viewPasswordRetype = '';

		let initiatedAges = false;

		$scope.initAges = () => {	
			let i = $scope.minAge;
			while(i <= $scope.maxAge){
				$scope.ages.push(i);
				i++;
			}
			initiatedAges = true;
		}		

		if (!initiatedAges) {
				$scope.initAges();
			}

		$scope.userData = {
			user: '',
			name: '',
			password: '',
			email: '',
			gender: '',
			age: '',
			aboutYou: ''
		}

		$scope.verifPass = () => {
			if ($scope.viewPassword) {
				//verif matching pass from views before encryption
			 	$scope.message = registerService.validatePass($scope.viewPassword, $scope.viewPasswordRetype);
			}	

			if ($scope.message ==='') {
					return true;
				}
				else {
					return false;		

				}
		}

		$scope.verifUserExist = (user) => {
				$scope.registerError = false; 
				$scope.registerMessage = '';

				if (user) {
					usersService.verifIfUsersExist(user).then(response => {
						if (response) {
							$scope.registerError = true; 
							$scope.registerErrorMessage = 'This user already exist';
						}
					});
				}
			}

		//inserting user data in database
		$scope.registerUser = () => {
			$scope.userData.password = registerService.encodeString($scope.viewPassword);
			registerService.insertUser($scope.userData);
		}
	});