(function(){
	'use strict'

	angular	
		.module('conecta')
		.config(configuration);

		configuration.$inject = ['$routeProvider'];

		function configuration($routeProvider){
			$routeProvider.when('/',{
				controller: 'homeController',
        		controllerAs: 'home',
        		templateUrl: 'app/views/home/home.html'
			}).otherwise({
	         	redirectTo: '/'
	      	});
		}

})();