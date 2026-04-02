require('dotenv').config();
const config = require('config');
const nodemailer = require('nodemailer');

console.log(config.get('auth.email_user'), config.get('auth.email_password'));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aninakwahdesmond3@gmail.com',
    // pass: config.get('auth.email_password'),
    pass: 'ourjzlvunykvjjya',
    // pass:
  },
  // tls: { rejectUnauthorized: false },
});

//verify connection

transporter.verify((error, success) => {
  if (error) console.error('Email cofiguration error: ', error);
  else console.log('Email server is ready to send message', success);
});

module.exports = transporter;
