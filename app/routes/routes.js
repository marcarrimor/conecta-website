(function(){
	'use strict'

	angular
		.module('conecta')
		.config(configuration);

		// configuration.$inject = ['$routeProvider'];

		// function configuration($routeProvider){

		configuration.$inject = ['$routeProvider', '$locationProvider'];

		function configuration($routeProvider, $locationProvider){
			
			$routeProvider.when('/',{
				// title: 'Conecta Mx | Soluciones Tecnológicas',
				// robots: 'follow,index',
				controller: 'homeController',
        		controllerAs: 'home',
        		templateUrl: 'app/views/home/home.html'
			}).when('/nosotros',{
				// title: 'Nosotros | Conecta Mx',
				// robots: 'follow,index',
				controller: 'aboutController',
        		controllerAs: 'about',
        		templateUrl: 'app/views/about/about.html'
			}).when('/productos',{
				// title: 'Productos | Conecta Mx',
				// robots: 'follow,index',
				controller: 'productsController',
        		controllerAs: 'products',
        		templateUrl: 'app/views/products/products.html'
			}).when('/clientes',{
				// title: 'Clientes | Conecta Mx',
				// robots: 'follow,index',
				controller: 'clientsController',
        		controllerAs: 'clients',
        		templateUrl: 'app/views/clients/clients.html'
			}).when('/partners',{
				// title: 'Partners | Conecta Mx',
				// robots: 'follow,index',
				controller: 'partnersController',
        		controllerAs: 'partners',
        		templateUrl: 'app/views/partners/partners.html'
			}).when('/contacto',{
				// title: 'Contacto | Conecta Mx',
				// robots: 'follow,index',
				controller: 'contactController',
        		controllerAs: 'contact',
        		templateUrl: 'app/views/contact/contact.html'
			}).when('/datos',{
				// title: 'Conecta Mx',
				// robots: 'noindex',
				controller: 'datosController',
        		controllerAs: 'datos',
        		templateUrl: 'app/views/contact/datos/datos.html'
			}).otherwise({
	         	redirectTo: '/'
	      	});

	      	$locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          	});

   //        	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			// 	$rootScope.title = current.$$route.title;
			// 	$rootScope.description = current.$$route.description;
			// 	$rootScope.canonical = current.$$route.canonical;
			// 	$rootScope.robots = current.$$route.robots;
			// });
		
		};

			
		

})();
