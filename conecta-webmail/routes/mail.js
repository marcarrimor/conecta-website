var express = require('express');
var router = express.Router();
var config = require("../keys");

var Mailjet = require('../controllers/mailjet/mailjet.js');
var mailjet = new Mailjet(config.apiKey, config.secretKey);


var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    ++alias;
  });
});



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
         [req.body.correo, 'bcc:contacto@conecta.co'],
         'Contacto Conecta Soluciones Tecnológicas',
         'html',
         html)){
                 res.jsonp(data);
         }else{
                 	data = {
                 			success: false,
                 			mensaje: "Ocurrió un error al enviar el correo."
                 		}
                 	res.jsonp(data);
         }


});




module.exports = router;
