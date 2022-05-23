"use strict";
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const router = express.Router()

const localHost = 'http://localHost:'
const localPort = 8080
const endPoint = '/access'
const toUser = 'contact@layesall.com'
// const toPass = 'qmKnXpsMmPHvvxJ9VR'

// send mail with defined transport object
router.post(`${endPoint}`, (req, res) => {

  res.send("Hallo test email");

  async function main() {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "send.one.com'",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: toUser,
        // pass: toPass,
      },
    });

    let from_name = req.body.name;
    let from_email = req.body.email;
    let from_subject = req.body.subject;
    let from_message = req.body.message;

    let info = await transporter.sendMail({
      from: `${from_name} <${from_email}>`,
      to: toUser,
      subject: `${from_subject}`,
      text: `${from_message}`,
      html: `${from_message}`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);

});

app.listen(localPort, () => {
  console.log(`Server running at ${localHost}${localPort}${endPoint}`);
})