angular.module('registerModule')
	.controller('registerController', function($scope, $http, registerService){

		$scope.minAge = 18; 
		$scope.maxAge = 99;
		$scope.ages = [];
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
			retypePass: '',
			email: '',
			gender: '',
			age: '',
			aboutYou: ''
		}

		$scope.registerUser = function(){
			$http.post('/registerUser', $scope.userData).then(function success(){
				console.log('userul s-a inregistrat cu success');
			});
		}

		$scope.verifPass = function(){
			if ($scope.userData.password) {
			 	$scope.message = registerService.validatePass($scope.userData.password, $scope.userData.retypePass);
			}	

			if ($scope.message ==='') return true;
				else return false;		
		}
	});