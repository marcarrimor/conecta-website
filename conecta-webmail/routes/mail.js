var express = require('express');
var router = express.Router();
var config = require("../keys");
console.log(config);
var mailjet = require ('node-mailjet')
	.connect(config.apiKey, config.secretKey);

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
	var request = mailjet.post("send");

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
request.request(emailData).then(function(result){
	console.log(result);
	res.jsonp(data);
}).catch(function(reason){
	console.log(reason);
	data = {
			success: false,
			mensaje: "Ocurrió un error al enviar el correo."
		}
});
	// .request('success', function (response, body) {
	// 	console.log (response.statusCode, body);
	// 	res.jsonp(data);
	// })
	// .on('error', function (err, response) {
	// 	console.log (response.statusCode, err);
	// 	data = {
	// 		success: false,
	// 		error: "Ocurrió un error al enviar el correo."
	// 	}
	// });
	
});
module.exports = router;