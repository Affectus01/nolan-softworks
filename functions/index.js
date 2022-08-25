const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();
const cors = require("cors")({ origin: true });

const gmailUser = functions.config().gmail.email;
const gmailPass = functions.config().gmail.pass;

var mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

exports.submit = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.set("Access-control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.end();
  } else {
    cors(req, res, async () => {
      if (req.method !== "POST") {
        return;
      }
      let fname = req.query.fname;
      let lname = req.query.lname;
      let phone = req.query.phone;
      let email = req.query.email;
      let commentsQuestions = req.query.commentsQuestions;
      let content = `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nE-mail: ${email}\nComment & Questions: ${commentsQuestions} `;
      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailUser,
        subject: `Website Contact Form: ${req.body.fname}`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      };
      await mailTransport.sendMail(mailOptions).then(() => {
        console.log(`New email sent to: ${gmailUser}`);
        res.status(200).send({
          isEmailSend: true,
        });
        return;
      });
    });
  }
});
