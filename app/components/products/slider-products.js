/*IIFE*/
(function(){
    'use strict'
    
    var sliderProducts = {
        controller: productsCtrl,
        templateUrl: 'app/components/products/slider-products.html' 
    };

    function productsCtrl(){
        var asController = this;
 
  };

    angular
      .module('conecta')
      .component('sliderProducts', sliderProducts); 
})();