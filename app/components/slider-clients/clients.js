/*IIFE*/
(function(){
    'use strict'
    
    var clients = {
        controller: clientsCtrl,
        templateUrl: 'app/components/slider-clients/clients.html' 
    };

    function clientsCtrl(){
        var asController = this;
 
  };

    angular
      .module('conecta')
      .component('clients', clients); 
})();