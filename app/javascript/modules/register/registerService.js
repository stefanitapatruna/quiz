angular.module('registerModule')
	.factory('registerService', function() {
		var registerService = {};

		registerService.validatePass = function(pass1 , pass2) {
			var message = '';

			if (pass1.length <= 6) {
				return message = "Password must have at least 6 characters";
			}
			if (pass1 !== pass2){
				return message = "Password doesn't match. Be more careful bro!";
			} 

			return message;
		}

		registerService.value= 'from register Service';	

		return registerService;				
	});	