var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./functions/config");

var transport = {
  host: "smtp.gmail.com", // Don�t forget to replace with the SMTP host of your provider
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

router.post("/contact", (req, res, next) => {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var phone = req.body.phone;
  var email = req.body.email;
  var commentsQuestions = req.body.commentsQuestions;
  var content = `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nE-mail: ${email}\nComment & Questions: ${commentsQuestions} `;

  var mail = {
    from: fname,
    to: "benjiman.nolan1@gmail.com", // Change to email address that you want to receive messages on
    subject: "New Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

router.post("/quote", (req, res, next) => {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var phone = req.body.phone;
  var email = req.body.email;
  var projectType = req.body.projectType;
  var budget = req.body.budget;
  var completionDate = req.body.completionDate;
  var projectDetails = req.body.projectDetails;
  var content = `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nE-mail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\nCompletion Date: ${completionDate}\nProject Details: ${projectDetails} `;

  var mail = {
    from: fname,
    to: "benjiman.nolan1@gmail.com", // Change to email address that you want to receive messages on
    subject: "New Request Quote Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(4000);
