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


    function sendMail(){
      $ajax({
        url: 'localhost:3000/send/',
        data: {
          
        },
        type: 'POST',
        datatype: JSON,
        success: 
        error:

        function(){
          return: false
        }
      }),
      return true;
    }

    angular
      .module('conecta')
      .component('formConecta', formConecta); 
})();