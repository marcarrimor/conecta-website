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



var html = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"> <head> <style type="text/css">body{font-family:Helvetica,Arial;font-size:13px}</style> <title></title> </head> <body style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;"> <div> <div style="word-wrap: break-word; -webkit-nbsp-mode: space; -webkit-line-break: after-white-space;"> <div> <div> <div> <br /> <table width="100%" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" style="padding:40px; font-size: 13px; line-height: 24px; color: #373737; background: #f2f2f2;"><tbody> <tr> <td valign="top"></td></tr> <tr> <td valign="top"> <table id="body" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tbody> <tr> <td valign="top"> <div style="max-width: 700px; margin: 0 auto; padding: 12px;"> <div class="card" style="background: #fff; background-image: url(http://conecta.co/app/dist/img/mailbg.png); background-position: right bottom; background-size: 100%; background-repeat: no-repeat; border-radius: 4px; border-style: solid; border-width: thin; border-color: #dddddd; padding: 4rem; margin-bottom: 1rem;"> <img src="http://conecta.co/app/dist/img/conectamail.png" alt="" style="width:100%; margin-top: -15px; margin-bottom: 30px;" /> <hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(157, 157, 157, 0), rgba(0, 0, 0, 0.2), rgba(157, 157, 157, 0)); margin-bottom: 43px;" /> <h3 style="color: #003b53; margin: 0 0 12px; line-height: 30px;">Estimado(a)'+req.body.nombre+'</h3> <p style="font-size: 15px; line-height: 18px;">Gracias por ponerte en contacto con nosotros, nuestro equipo de negocio en breve te contactará para solucionar todas tus dudas y atender tus sugerencias.</p> <p style="font-size: 15px; line-height: 18px;"> <br /> </p> <p style="font-size: 15px; line-height: 18px;">Contenido del correo</p> <p style="font-size: 14px; line-height: 16px; color: #AAA; text-align: left; margin: 0 auto 1rem; max-width: 480px; word-break: break-word; margin-top: 40px; margin-bottom: 40px;"></p> <ul> <li> <b>Nombre:</b> '+req.body.nombre+'</li> <li> <b>Correo:</b> '+req.body.correo+'</li> <li> <b>Teléfono:</b> '+req.body.phone+'</li> <li> <b>Mensaje:</b> '+req.body.message+'</li> </ul> <p style="font-size: 14px; line-height: 18px;"> <br /> </p> <p style="font-size: 14px; line-height: 18px;"> <br /> </p> <p style="font-size: 14px; line-height: 18px;"> <br /> </p> <div class="footer-mail"> <hr style=" border: 0; height: 1px; background-image: linear-gradient(to right, rgba(157, 157, 157, 0), rgba(0, 0, 0, 0.2), rgba(157, 157, 157, 0)); margin-top: 55px;" /> <p style="font-size: 11px; line-height: 5px;">— Conecta Soluciones Tecnológicas SC</p> <p style="font-size: 11px; line-height: 5px;">— contacto@conecta.co</p> <p style="font-size: 11px; line-height: 5px;">—+52 (55) 63 90 99 41</p> </div> </p> </div> </div> </td></tr> </tbody> </table> </td></tr> <tr> <td valign="top"> <table id="body" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tbody> <tr> <td valign="top"> <div align="center" style="max-width: 470px; margin: 0 auto; padding: 0 12px; margin-bottom: 60px; margin-top: 30px;"> <p class="footer_address" style="margin-top: 16px; color: #848484; font-size: 12px; line-height: 20px;"> <a href="http://conecta.co/" style="font-weight: bold; color: #439fe0;">CONECTA SOLUCIONES TECNOLOGICAS SC</a> <br /> Derechos reservados Conecta Soluciones Tecnológicas</p> </div> </td></tr> </tbody> </table> </td></tr> </tbody> </table> </div> </div> </div> </div> <hr /> </div> <hr /> </body></html>';


if(mailjet.sendContent('contacto@conecta.co',
         [req.body.correo, 'bcc:octavio.martinez@conecta.co'],
         'Contacto Conecta Soluciones Tecnológicas',
         'html',
         html)){
                 return res.redirect("http://conecta.co/datos");
         }else{
                 	data = {
                 			success: false,
                 			mensaje: "Ocurrió un error al enviar el correo."
                 		}
                 	return res.redirect("http://conecta.co/datos");
         }


});




module.exports = router;
