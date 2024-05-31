const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, //sandbox.smtp.mailtrap.io,
    port: process.env.EMAIL_PORT, //2525,
    auth: {
      user: process.env.EMAIL_USERNAME, //'8a077658a37935',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Alan Brado <hello@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
