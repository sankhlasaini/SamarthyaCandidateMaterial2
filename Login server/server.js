var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var config = require('./config');
var User = require('./user');
var morgan = require('morgan');
var mongoose = require('mongoose');
var xmlhttp = require('http');
var cors = require('cors');

var port = process.env.PORT || 4000;

mongoose.connect(config.database);

app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.send('Hello! we are at ' + port);
});

// add user to database
app.post('/adduser', function(req, res) {
    var sheenam = new User({
        email: 'sheenam@gmail.com',
        password: 'sheenam1'
    });

    sheenam.save(function(err) {
        if (err) throw err;
        console.log('User save successfully');
    });
});

var apiRoutes = express.Router();

//authentication
apiRoutes.post('/authenticate', function(req, res) {

    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) { console.log('error'); } //throw err};

        if (!user) {
            console.log('Authentication failed. User not found.');
        } else if (user) {
            if (user.password != req.body.password) {

                console.log('Authentication failed. Wrong password.');
            } else {
                var token = jwt.sign(user, app.get('superSecret'));
                var user1 = {
                    email: user.email,
                    token: token
                };
                if (user1) {
                    // authentication successful
                    res.send(user1);
                } else {
                    // authentication failed
                    res.status(401).send('Username or password is incorrect');
                }
            }
        }
    });
});


//verify token

// function isAuthenticated(req, res, next) {
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];

//     console.log("user token: " + token);

//     if (!token) {
//         res.status(403).json({
//             error: 'Invalid user request or unauthorised request..!'
//         });
//         return;
//     }

//     var secretKey = config.secret;

//     // var decoded = jwt.verify(token, secretKey);
//     // console.log(decoded._doc);

//     jwt.verify(token, secretKey, function(err, user) {

//         if (err) {
//             console.error("Error in decoding token: " + err);
//             res.status(403).json({
//                 error: 'Error!'
//             });
//             return;
//         }

//         user = user._doc;

//         if (user) {

//             User.findOne({ name: user.name }, function(err, user) {
//                 if (err) {
//                     console.error("Error in finding user for authentication, error: ", err);
//                     res.status(403).json();
//                     return;
//                 }

//                 if (!user) {
//                     console.error("User not found for authentication, error: ", err);
//                     res.status(403).json();
//                     return;
//                 }
//                 console.log(user + 'hello');
//                 req.user = user;
//                 next();
//             });
//         }
//     }); //end verify
// }



// route middleware to verify a token
// apiRoutes.use(function(req, res, next) {

//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];

//     // decode token
//     if (token) {

//         // verifies secret and checks exp
//         jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//             if (err) {
//                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//             } else {
//                 // if everything is good, save to request for use in other routes
//                 req.decoded = decoded;
//                 next();
//             }
//         });

//     } else {

//         // if there is no token
//         // return an error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided.'
//         });

//     }
// });


//remove user
// app.delete('/:_id', function(req, res) {
//     User.remove({ _id: req.param._id }, function(err) {
//         if (err) console.log(err);
//         else {
//             res.send('deleted successfull');
//         }
//     });
// });(

apiRoutes.get('/', function(req, res) {
    res.send('Hello i am here');
});

//get all users
apiRoutes.get('/showuser', function(req, res) {
    User.find({}, function(err, user) {
        res.json(user);
    });
});

app.use('/api', apiRoutes);

app.listen(port);
console.log('http://localhost:' + port);