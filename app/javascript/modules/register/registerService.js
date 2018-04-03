angular.module('registerModule')
	.factory('registerService', function() {
		var registerService = {};
		var CryptoJS = require('crypto-js');

		registerService.validatePass = function(pass1 , pass2) {
			var message = '';

			if (pass1.length < 6) {
				return message = "Password must have at least 6 characters";
			}
			if (pass1 !== pass2){
				return message = "Password doesn't match. Be more careful bro!";
			} 

			return message;
		}

		registerService.encodeString = function(string){
			return CryptoJS.MD5(string).toString();
		}

		return registerService;				
	});	