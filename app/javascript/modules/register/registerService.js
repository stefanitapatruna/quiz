angular.module('registerModule')
	.factory('registerService', ($http, helpersService) => {
		let registerService = {};
		let CryptoJS = require('crypto-js');

		registerService.validatePass = (pass1 , pass2) => {
			let message = '';

			if (pass1.length < 6) {
				return message = "Password must have at least 6 characters";
			}
			if (pass1 !== pass2){
				return message = "Password doesn't match. Be more careful bro!";
			} 

			return message;
		}

		registerService.encodeString = (string) => {
			return CryptoJS.MD5(string).toString();
		}

		registerService.insertUser = (data) => {

			$http.post(helpersService.serverUrl('registerUser'), data).then( () => {
				console.log('userul s-a inregistrat cu success');
			});
		}

		return registerService;				
	});	