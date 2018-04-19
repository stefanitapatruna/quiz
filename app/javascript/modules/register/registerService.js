angular.module('registerModule')
	.factory('registerService', function($http, helpersService) {
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

		registerService.insertUser = function(data) {

			$http.post(helpersService.serverUrl('registerUser'), data).then(function success(){
				console.log('userul s-a inregistrat cu success');
			});
		}

		return registerService;				
	});	