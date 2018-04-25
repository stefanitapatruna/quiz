angular.module('usersModule')
	.factory('usersService', function($http, helpersService) {
		var usersService = {};
	
		usersService.verifIfUsersExist = (user) => {		
			
			return $http.get(helpersService.serverUrl('verifUser/')+ user).then( function(response) {
				if (response.data == null) {return false} 
					else {return true}
			});
		}

		usersService.login = (user, pass) => {
			var loginData = {};
			loginData.user = user;
			loginData.pass = pass;
			return $http.post(helpersService.serverUrl('login'), loginData).then( response => {
				return response.data });
		}

		usersService.isLogged = function(){
			var userData = {};

			userData = sessionStorage.getItem('userData');
			if (userData === null) return false;
				else return true;
		}

		return usersService;
	});