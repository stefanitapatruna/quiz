angular.module('registerModule',[])
	.controller('registerController',['$scope','$http', function($scope, $http){

		$scope.minAge = 18; 
		$scope.maxAge = 99;

		$scope.userData = {
			fname: '',
			lname: '',
			password: '',
			retypePass: '',
			gender: '',
			age: '',
			aboutYou: ''
		};

		$scope.registerUser = function(){

			$http.post('/registerUser', $scope.userData);
		}
	}]);