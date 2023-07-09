const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.APP_PASSWORD,
  },
});

async function main(recieverAddress, html) {
  const info = await transporter.sendMail({
    from: '"EKep Obasi 👻" <arreyettaekep@gmail.com>',
    to: recieverAddress,
    subject: "Welcome to Tastie - here's your API key",
    text: "Ready to Learn new Recipes?!",
    html: html,
  });

  console.log(`Message sent - OK - + ${info.messageId}`);
}

module.exports = main;
