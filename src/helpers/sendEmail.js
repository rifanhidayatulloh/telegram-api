const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const { GMAIL_PASS, GMAIL_USER, APP_URL } = require('./env');

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

module.exports = {
  sendConfirmationEmail: (email, confirmationCode, name) => {
    transport.use(
      'compile',
      hbs({
        viewEngine: {
          extname: '.html',
          partialsDir: path.resolve('./src/template/email'),
          defaultLayout: false,
        },
        viewPath: path.resolve('./src/template/email'),
        extName: '.html',
      })
    );
    const mailOptions = {
      from: '"Telegram App" <admin@telegramapp.co.id>',
      to: email,
      subject: 'Please Confirm Your Account',
      text: 'Confirm Your email Telegram Account',
      template: 'confirm-email',
      context: {
        url: `${APP_URL}/auth/verify-email?token=${confirmationCode}`,
        name: `${name}`,
      },
    };

    transport.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
};
