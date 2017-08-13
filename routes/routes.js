'use strict';
var path = require('path');
var nodemailer = require("nodemailer");


module.exports = function(app) {


    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });
    app.post('/sendEmail', function (req, res){

      var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure: true,
        service:'gmail',
        auth:{
          user: "",
          pass:''
        }

      });
      var mailOptions = {
    from: '',
    to: '',
    subject: 'KOP Inquiry',
    text: ''
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

    });

};
