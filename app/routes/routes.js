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
			}).when('/nosotros',{
				controller: 'aboutController',
        		controllerAs: 'about',
        		templateUrl: 'app/views/about/about.html'
			}).when('/contacto',{
				controller: 'contactController',
        		controllerAs: 'contact',
        		templateUrl: 'app/views/contact/contact.html'
			}).otherwise({
	         	redirectTo: '/'
	      	});
		}

})();