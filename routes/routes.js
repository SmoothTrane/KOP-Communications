'use strict';
var path = require('path');
var nodemailer = require("nodemailer");


module.exports = function(app) {




    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });
    app.post('/sendEmail', function (req, res,err){
      console.log(req.body)

      if(err){
        res.send(err);
      }

  //     var transporter = nodemailer.createTransport({
  //       host:'smtp.gmail.com',
  //       port:465,
  //       secure: true,
  //       service:'gmail',
  //       auth:{
  //         user: kopEmail,
  //         pass:pass
  //       }
  //
  //     });
  //     var mailOptions = {
  //   from: '',
  //   to: '',
  //   subject: 'KOP Inquiry: ' + req.body.email + ": " + req.body.name,
  //   text: req.body.message
  // };
  //
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  res.end();

    });

};
