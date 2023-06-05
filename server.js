const path = require('path');
const express = require("express");
// const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const bodyParser = require('body-parser');

// server used to send send emails
const app = express();
app.use(express.static(path.resolve(__dirname,'./build')));
app.use(cors());
// app.use(express.json());
// app.use("/", router);
app.use(bodyParser.json());



const contactEmail = nodemailer.createTransport({
  port: 2525,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./build','index.html'));
})

app.listen(process.env.PORT || 4000, () => console.log("Server Running"));
console.log(process.env.EMAIL);
