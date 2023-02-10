const {promisify} = require('util');
const nodemailer = require('nodemailer');



class MailClient {
  constructor(defaults) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PASSWORD,
      }
    });
      
  }

  send(to, subject, message ) {
    this.mailOptions = {
      from: process.env.EMAIL_SENDER ,
      to: to,
      subject: subject,
      text: message
    };
    console.log("message : ", message)
    this.transporter.sendMail(this.mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          console.log("Email send to :" + to )
        }
      });
  }

  async sendError(e) {
    await this.send(`Error: ${e}`, e.Actor.Attributes.image);
  }
}

module.exports = MailClient;

