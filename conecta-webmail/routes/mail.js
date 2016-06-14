var express = require('express');
var router = express.Router();
var config = require("../keys");

var Mailjet = require('mailjet-sendemail');
var mailjet = new Mailjet(config.apiKey, config.secretKey);


// mailjet.sendContent('contacto@conecta.co',
//          ['marisol.carrillo@conecta.co', 'bcc:octavio.martinez@conecta.co'],
//          'This is a test !',
//          'html',
//          '<b>Well, this is working !</b>');

// var mailjet = require ('node-mailjet')
// 	.connect(config.apiKey, config.secretKey);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get mail');
});

router.post('/sendMail', function(req, res){
	console.log(req);
	var data = {
				succes: true,
				mensaje: "Correo enviado satisfactoriamente"
			}
	var html = "<html><body><h1>Hola "+req.body.nombre+"</h1></body></html>";
	// var request = mailjet.post("send");

	var emailData = {
		"FromEmail":"contacto@conecta.co",
		"FromName":"Conecta Soluciones Tecnológicas",
		"Subject":"Contacto",
		"Html-part": html,
		"Recipients":[
				{
						"Email": req.body.correo
				}
		]
	};
// request.request(emailData).then(function(result){
// 	console.log(result);
// 	res.jsonp(data);
// }).catch(function(reason){
// 	console.log(reason);
// 	data = {
// 			success: false,
// 			mensaje: "Ocurrió un error al enviar el correo.",
// 			reason: reason
// 		}
// 	res.jsonp(data);
// });


mailjet.sendContent('contacto@conecta.co',
         ['marisol.carrillo@conecta.co', 'bcc:octavio.martinez@conecta.co'],
         'This is a test !',
         'html',
         '<b>Well, this is working !</b>');

});
module.exports = router;
