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
             $(".autoplay").slick({
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
              });
        });
 
  };

    angular
      .module('conecta')
      .component('clients', clients); 
})();