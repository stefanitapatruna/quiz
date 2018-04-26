angular.module('helpersModule')
	.factory('helpersService', () => {
		let helpersService = {};

		helpersService.serverUrl = (url) => {
			return 'http://localhost:4000/' + url;
		}

		return helpersService;
	});