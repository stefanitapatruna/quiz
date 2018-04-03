angular.module('usersModule')
	.factory('usersService', function($http) {
		var usersService = {};
	
		usersService.verifIfUsersExist = (user) => {		
			var userData = {};

			return $http.get('/verifUser/'+ user).then( function(response) {
				if (response.data == null) {return false} 
					else {return true};
			});
		}

		usersService.login = (user, pass) => {
			return $http.get('/login/'+ user && pass).then(function (response){
				if (response.data == null) {return false} 
					else {return true};
			});
		}

		return usersService;

	});