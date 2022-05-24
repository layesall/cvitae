"use strict";
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const localHost = "http://localHost:";
const localPort = 4000;
const endPoint = "/access";

const toHost = "smtp.ethereal.email" //send.one.com 
const toPort = 587 // 465
const toUser = "tillman.gulgowski55@ethereal.email" //contact@layesall.com;
const toPass = "FvqckPN2WnPD7Fefrj"; //@mylayesall21%

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// send mail with defined transport object
app.post(`${endPoint}`, async (req, res) => {
  res.send("Hallo test email");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: toHost,
    port: toPort,
    secure: true, // true for 465, false for other ports
    auth: {
      user: toUser,
      pass: toPass,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `${req.body.name} <${req.body.email}>`,
      to: toUser,
      subject: `${req.body.email}`,
      text: `${req.body.message}`,
    });

    console.log(info);
  } catch (error) {
    console.error(error);
  }
});

app.listen(localPort, () => {
  console.log(`Server running at ${localHost}${localPort}${endPoint}`);
});
