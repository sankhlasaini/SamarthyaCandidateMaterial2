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
var usermail2;
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "samarthyawave16@gmail.com",
        pass: "Samarthya@wave16"
    }
}));
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
        from: "samarthyawave16@gmail.com",
        to: jsonobj.to,
        subject: jsonobj.subject,
        //  html: "Hello,<br>" + mailBody + "<br><a href=" + link + ">Click here to verify</a>"
        html: "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='W3Schools.com'><br><h3 style='color : red'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'><a style='text-decoration : none;color : white' href=" + link + ">Confirm here</a></button>"
    }
    mailOptions1 = mailOptions;
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log("sending erroer part ", error);
            res.end("error");
        } else {
            console.log("Sending Mail...")
            res.end("sent");
        }
    });
});
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
    } else {
        res.end("<h1>Request is from unknown source");
    }
});
app.get('/verifiedmail', function(req, res) {
    console.log(usermail2);
    res.send({ "usermail2": usermail2 }); // sending email id to candidate register component
});
app.post('/welcome', function(req, res) {
    var object1 = req.body.json;
    var jsonobj = JSON.parse(object1);
    redirectLink = jsonobj.redirect;
    mailBody = jsonobj.mailBody;
    var mailOptions = {
        from: "samarthyawave16@gmail.com",
        to: jsonobj.to,
        subject: jsonobj.subject,
        html: `<h1 style='color : indigo'>SAMARTHYA</h1><br>
        <h3 style='color : green'>Welcome to Samarthya!<h3>
        <br>
         <img src='http://www.petalspreschool.com/images/pre-school-career.jpg' alt='image not available' height="300" width="800">
        <br>Thanks so much for joining us . You’re on your way to super-career and beyond!<br>
       `
    }
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
app.listen(3004, function() {
    console.log("Express Started on Port 3004");
});