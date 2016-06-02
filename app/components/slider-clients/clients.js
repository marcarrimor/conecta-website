/*IIFE*/
(function(){
    'use strict'
    
    var clients = {
        controller: clientsCtrl,
        templateUrl: 'app/components/slider-clients/clients.html' 
    };

    function clientsCtrl(){
        var asController = this;



        angular.element(document).ready(function () {
             $(".regular").slick({
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
          });
        });
 
  };

    angular
      .module('conecta')
      .component('clients', clients); 
})();