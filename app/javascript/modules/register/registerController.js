angular.module('registerModule')
	.controller('registerController', function($scope, registerService){

		$scope.minAge = 18; 
		$scope.maxAge = 99;
		$scope.ages = [];
		$scope.viewPassword = '';
		$scope.viewPasswordRetype = '';
		var initiatedAges = false;

		$scope.initAges = function(){	
			var i = $scope.minAge;
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

		$scope.registerUser = function(){
			$scope.userData.password = registerService.encodeString($scope.viewPassword);
			registerService.insertUser($scope.userData);
		}

		$scope.verifPass = function(){
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