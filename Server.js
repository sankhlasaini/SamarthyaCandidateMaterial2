var express = require('express');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');
var cors = require('cors');
var smptp = require('smtp-server');
var rand, host, link; //verify code
//var smtpTransport1 = require('./nodemailer/lib/smtp-transport');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: "Yahoo",
    //host: "smtp.gmail.com",
    // port: 465,
    //secure: true,
    auth: {
        user: "samarthyastackroute@yahoo.com",
        pass: "wave@16"
    }
}));
//var nodemailer = require("nodemailer");
let app = express();

var redirectLink = '';
var mailBody = '';
var userMail = '';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.get('/', function(req, res) {
    console.log("Sending the file ", path.resolve(__dirname, 'app', 'app.component.html'));
    res.sendFile(path.resolve(__dirname, 'src', 'app', 'app.component.html'));
});

app.post('/', function(req, res) {
    var object1 = req.body.json;
    var jsonobj = JSON.parse(object1);
    redirectLink = jsonobj.redirect;
    userMail = jsonobj.to;
    mailBody = jsonobj.mailBody;
    //------------verify-----------
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + req.get('host') + "/verify?id=" + rand;

    //----------verify------------------
    var mailOptions = {
        from: 'samarthyastackroute@yahoo.com',
        to: jsonobj.to,
        subject: jsonobj.subject,
        html: "Hello,<br>" + mailBody + "<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log("to : " + mailOptions.to);
    console.log("from : " + mailOptions.from);
    console.log("sub : " + mailOptions.subject);
    console.log("text : " + mailOptions.text);
    console.log("link :" + link);
    // res.send(mailOptions);
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
        if (req.query.id == rand) {
            console.log("Email is verified");
            res.redirect(redirectLink + '/' + userMail);
            res.end("<h1>Email " + mailOptions1.to + " is been Successfully verified");
        } else {
            console.log("Email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    } else {
        res.end("<h1>Request is from unknown source");
    }
});

app.listen(3000, function() {
    console.log("Express Started on Port 3000");
});