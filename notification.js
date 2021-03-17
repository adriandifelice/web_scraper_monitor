const nodemailer = require('nodemailer');
require('dotenv').config();

const emailTo = 'exampleEmail@email.com'
const service = 'e.g: gmail.com'

let transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: process.env.USUARIO,
    pass: process.env.PASS
  },
  tls: {
    rejectUnauthorized: false
}
});

let mailOptions = {
      from: process.env.USUARIO,
      to: emailTo,
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

