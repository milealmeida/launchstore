const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "38d65dc8ced40f",
      pass: "b89ef714e478ce"
    }
  });