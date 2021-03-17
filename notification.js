const nodemailer = require('nodemailer');
require('dotenv').config();



var transporter = nodemailer.createTransport({
  service: 'gmail.com',
  auth: {
    user: process.env.USUARIO,
    pass: process.env.PASS
  },
  tls: {
    rejectUnauthorized: false
}
});

var mailOptions = {
      from: process.env.USUARIO,
      to: 'adrian.di.felice@gmail.com',
      subject: '',
      text:''
    };

function sendMail(subject,text,link,url) {
mailOptions.subject = subject;
mailOptions.html = "<a href="+url+link+ ">" + text + "</a>";
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = sendMail;

