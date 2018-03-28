angular.module('registerModule')
	.controller('registerController',['$scope','$http','registerService', function($scope, $http, registerService){

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
			gender: '',
			age: '',
			aboutYou: ''
		}

		$scope.registerUser = function(){
			console.log('s-a trimis userul l-a inregistrat');
			$http.post('/registerUser', $scope.userData);
		}

		$scope.verifPass = function(){
			$scope.message = registerService.validatePass($scope.userData.password, $scope.userData.retypePass);

			if ($scope.message ==='') return true;
				else return false;
		}

	}]);