/*IIFE*/
function sendMail(){
  $.ajax({
    url: 'http://mailer.conecta.co/mail/sendMail',
    data: {
        nombre: $("#name").val(),
        email: $("#name").val(),
        telefono: $("#phone").val(),
        message: $("#message").val()
    },
    type: 'POST',
    datatype: JSON,
    crossDomain: false,
    success: function(respuesta){
      console.log(respuesta);

    },
    error: function(respuesta){

    }
  });
}

$( "form" ).submit(function( event ) {

  console.log("send");
  event.preventDefault();
});



$("#submit-contact").click(function(){
        alert("hola");
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
