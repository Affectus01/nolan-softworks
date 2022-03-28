const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const creds = require("./config");
admin.initializeApp();

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(req, res, () => {
    var fname = req.query.fname;
    var lname = req.query.lname;
    var phone = req.query.phone;
    var email = req.query.email;
    var commentsQuestions = req.query.commentsQuestions;
    var content = `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nE-mail: ${email}\nComment & Questions: ${commentsQuestions} `;

    var mailOptions = {
      from: fname + lname,
      to: "benjiman.nolan1@gmail.com", // Change to email address that you want to receive messages on
      subject: "New Contact Form",
      text: content,
    };
  });

  return transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.send(err.toString());
    } else {
      return res.send("Sent");
    }
  });
});
