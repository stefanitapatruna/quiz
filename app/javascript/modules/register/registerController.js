angular.module('registerModule',[])
	.controller('registerController',['$scope', function($scope){

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
			console.log('user registered', this.userData);
		}
	}]);