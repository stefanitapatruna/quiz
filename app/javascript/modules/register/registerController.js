angular.module('registerModule')
	.controller('registerController', ($scope, registerService) => {

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
			fname: '',
			lname: '',
			password: '',
			email: '',
			gender: '',
			age: '',
			aboutYou: ''
		}

		$scope.registerUser = () => {
			$scope.userData.password = registerService.encodeString($scope.viewPassword);
			registerService.insertUser($scope.userData);
		}

		$scope.verifPass = () => {
			if ($scope.viewPassword) {
			 	$scope.message = registerService.validatePass($scope.viewPassword, $scope.viewPasswordRetype);
			}	

			if ($scope.message ==='') {
					return true;
				}
				else {
					return false;		

				}
		}
	});