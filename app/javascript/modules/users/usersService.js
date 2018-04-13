angular.module('usersModule')
	.factory('usersService', function($http) {
		var usersService = {};
	
		usersService.verifIfUsersExist = (user) => {		
			
			return $http.get('/verifUser/'+ user).then( function(response) {
				if (response.data == null) {return false} 
					else {return true}
			});
		}

		usersService.login = (user, pass) => {
			var loginData = {};
			loginData.user = user;
			loginData.pass = pass;
			$http.post('/login', loginData).then(function success(response){
				console.log(response);
			});
			return true;
		}

		return usersService;
	});