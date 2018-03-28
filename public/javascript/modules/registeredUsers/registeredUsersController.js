angular.module('registeredUsersModule')
		.controller('registeredUsersController',['$scope','$http', function($scope, $http){

			$scope.registeredUsers = '';

			$scope.getRegisteredUsers = function(){
				$http.get('/registeredUsers').then(function(response){
					$scope.registeredUsers = response.data;
					console.log($scope.registeredUsers);
				});
			};
		}]);