/*IIFE*/
function sendMail(){
  $.ajax({
    url: 'http://beta.conecta.co:3800/send/sendMail',
    data: {
        nombre: $("#name").val(),
        email: $("#name").val(),
        telefono: $("#phone").val(),
        message: $("#message").val()
    },
    type: 'POST',
    datatype: JSON,
    success: function(respuesta){
      console.log(respuesta);

    },
    error: function(respuesta){
      return false
    }
  });
  return true;
}

$("#submit-contact").click(function(){
  sendMail();
});



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