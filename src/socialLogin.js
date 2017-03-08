var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var configDB = require('./config/database.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var ejs = require('ejs');
// configuration 
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);
require('./config/passport')(passport);
// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');
// required for passport
app.use(session({
    secret: '7march2017',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./app/routes.js')(app, passport);
app.listen(port);
console.log('Social media Login Server ' + port);