/*IIFE*/
(function(){
    'use strict'
    
    var products = {
        controller: productsCtrl,
        templateUrl: 'app/components/slider-products/slider-products.html' 
    };

    function productsCtrl(){
        var asController = this;
 
  };

    angular
      .module('conecta')
      .component('products', products); 
})();