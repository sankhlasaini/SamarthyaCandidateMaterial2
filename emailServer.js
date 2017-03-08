var express = require('express');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');
var cors = require('cors');
var smptp = require('smtp-server');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var rand, host, link; //verify code
//var smtpTransport1 = require('./nodemailer/lib/smtp-transport');
var usermail2;
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    //host: "smtp.gmail.com",
    // port: 465,
    //secure: true,
    auth: {
        user: "samarthyawave16@gmail.com",
        pass: "Samarthya@wave16"
    }
}));
//var nodemailer = require("nodemailer");
let app = express();
var redirectLink = '';
var mailBody = '';
var userMail = '';
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
// app.get('/', function(req, res) {
//     console.log("Sending the file ", path.resolve(__dirname, 'app', 'app.component.html'));
//     res.sendFile(path.resolve(__dirname, 'src', 'app', 'app.component.html'));
// });
app.post('/', function(req, res) {
    var object1 = req.body.json;
    var jsonobj = JSON.parse(object1);
    redirectLink = jsonobj.redirect;
    userMail = jsonobj.to;
    mailBody = jsonobj.mailBody;
    //------------verify-----------
    // expire in 30 min
    var token = jwt.sign(jsonobj, 'I AM EMAIL TOKEN', { expiresIn: 1800 });
    console.log(token);
    host = req.get('host');
    link = "http://" + req.get('host') + "/verify?token=" + token;
    //----------verify------------------
    var mailOptions = {
        from: "prakuldhiman@yahoo.com",
        to: jsonobj.to,
        subject: jsonobj.subject,
        html: "Hello,<br>" + mailBody + "<br><a href=" + link + ">Click here to verify</a>"
    }
    mailOptions1 = mailOptions;
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log("sending erroer part ", error);
            res.end("error");
        } else {
            console.log("Sending Mail...")
                //  res.send(link); //send this link to email service to get response
            res.end("sent");
        }
    });
});
// app.get('/', function(req, res) {
//     let obj = { "link": link };
//     console.log(obj);
//     res.send(obj);
// })
app.get('/verify', function(req, res) {
    console.log(req.protocol + "://" + req.get('host'));
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        console.log("Domain is matched. Information is from Authentic email");
        //token verify
        var token = req.body.token || req.query.token;
        if (!token) {
            res.status(403).json();
        }
        if (token) {
            jwt.verify(token, 'I AM EMAIL TOKEN', function(err, emailData) {
                if (err) throw err;
                console.log(emailData);
                if (emailData) {
                    usermail2 = emailData.to;
                    res.redirect(redirectLink);
                    // res.end("Email is been Successfully verified");
                }
            });
        }
        // if (req.query.id == rand) {
        //     console.log("Email is verified");
        //     usermail2 = mailOptions1.to;
        //     console.log(usermail2);
        //     res.redirect(redirectLink);
        //     // res.send({ "usermail": userMail });
        //     res.end("<h1>Email " + mailOptions1.to + " is been Successfully verified");
        // } else {
        //     console.log("Email is not verified");
        //     res.end("<h1>Bad Request</h1>");
        // }
    } else {
        res.end("<h1>Request is from unknown source");
    }
});
app.get('/verifiedmail', function(req, res) {
    console.log(usermail2);
    res.send({ "usermail2": usermail2 }); // sending email id to candidate register component
});
app.listen(3000, function() {
    console.log("Express Started on Port 3000");
});