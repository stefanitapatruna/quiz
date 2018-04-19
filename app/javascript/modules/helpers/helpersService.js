angular.module('helpersModule')
	.factory('helpersService',function(){
		helpersService = {};

		helpersService.serverUrl = function(url){
			return 'http://localhost:4000/' + url;
		}

		return helpersService;
	});