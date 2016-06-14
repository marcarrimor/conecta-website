(function(){
	'use strict'

	angular	
		.module('conecta')
		.config(configuration);

		configuration.$inject = ['$routeProvider', '$locationProvider'];

		function configuration($routeProvider, $locationProvider){
			$routeProvider.when('/',{
				controller: 'homeController',
        		controllerAs: 'home',
        		templateUrl: 'app/views/home/home.html'
			}).when('/nosotros',{
				controller: 'aboutController',
        		controllerAs: 'about',
        		templateUrl: 'app/views/about/about.html'
			}).when('/productos',{
				controller: 'productsController',
        		controllerAs: 'products',
        		templateUrl: 'app/views/products/products.html'
			}).when('/clientes',{
				controller: 'clientsController',
        		controllerAs: 'clients',
        		templateUrl: 'app/views/clients/clients.html'
			}).when('/partners',{
				controller: 'partnersController',
        		controllerAs: 'partners',
        		templateUrl: 'app/views/partners/partners.html'
			}).when('/contacto',{
				controller: 'contactController',
        		controllerAs: 'contact',
        		templateUrl: 'app/views/contact/contact.html'
			}).otherwise({
	         	redirectTo: '/'
	      	});

	      	$locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          	});
		}

})();
