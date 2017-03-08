// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    fname: String,
    lname: String,
    gender: String,
    email: String,
    regId: String,
    // dob:'',
    aadhar: String,
    mob: String,

    password: String,
    conPassword: String,

    profession: String,
    pincode: String,
    location: String,
    placementCenter: String
}));