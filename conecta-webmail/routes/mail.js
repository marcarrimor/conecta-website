var express = require('express');
var router = express.Router();
var config = require("../keys");

var Mailjet = require('../controllers/mailjet/mailjet.js');
var mailjet = new Mailjet(config.apiKey, config.secretKey);


router.get('/', function(req, res, next) {
  res.send('get mail');
});

router.post('/sendMail', function(req, res){
	console.log(req.body);
	var data = {
				succes: true,
				mensaje: "Correo enviado satisfactoriamente"
			}
	var html = "<html><body><h1>Hola "+req.body.nombre+"</h1></body></html>";



if(mailjet.sendContent('contacto@conecta.co',
         [req.body.correo, 'bcc:octavio.martinez@conecta.co'],
         'Contacto Conecta Soluciones Tecnológicas',
         'html',
         html)){
                 return res.redirect("http://conecta.co/contacto/datos");
         }else{
                 	data = {
                 			success: false,
                 			mensaje: "Ocurrió un error al enviar el correo."
                 		}
                 	return res.redirect("http://conecta.co/contacto/datos");
         }


});




module.exports = router;
