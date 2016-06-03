/*IIFE*/
(function(){
    'use strict'
    
    var formConecta = {
        controller: formConectaCtrl,
        templateUrl: 'app/components/form/form-conecta.html' 
    };

    function formConectaCtrl(){
        var asController = this;
  };

    angular
      .module('conecta')
      .component('formConecta', formConecta); 
})();