'use strict';
var path = require('path');
var nodemailer = require("nodemailer");
var key = require("../key");


module.exports = function(app) {
var kopEmail = "contact.kopcommunications@gmail.com"
var kopPass = key;


    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });
    app.post('/sendEmail', function (req, res,err){
      console.log(kopPass.pass);


      if(err){
        res.send(err);
      }

      var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure: true,
        service:'gmail',
        auth:{
          user: kopEmail,
          pass: kopPass.pass
        }

      });
      var mailOptions = {
    from: kopEmail,
    to: 'kopcommunications@gmail.com ',
    subject: 'KOP Inquiry: ' + req.body.email + ": " + req.body.name,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.end();

    });

};
