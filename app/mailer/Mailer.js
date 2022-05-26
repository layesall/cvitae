"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path')
const nodemailer = require("nodemailer");
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve(__dirname, '../../.env')
})

const ENV = process.env

const app = express();

const localurl = `http://${ENV.APP_HOST}:${ENV.APP_PORT}/`
const endPoint = "sendmail";

const toHost = ENV.MAIL_HOST
const toPort = ENV.MAIL_PORT
const toSecure = ENV.MAIL_SECURE
const toUser = ENV.MAIL_USER
const toPass = ENV.MAIL_PASS

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.post(`${endPoint}`, async (req, res) => {

  res.send("Hallo")

  let transporter = nodemailer.createTransport({
    host: toHost,
    port: toPort,
    secure: toSecure, 
    auth: {
      user: toUser,
      pass: toPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `${req.body.name} <${req.body.email}>`,
      to: toUser,
      subject: `${req.body.email}`,
      text: `${req.body.message}`,
    });

  } catch (error) {
    console.error(error);
  }
});

app.listen(ENV.APP_PORT || 4000, () => {
  console.log(`Server running at ${localurl}${endPoint}`);
});
