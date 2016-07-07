'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the userSchema
var userSchema = new Schema({
    name: {
        givenName: String,
        familyName: String
    },
    email: String,
    password: String
});

// export the user model
module.exports = mongoose.model('User', userSchema);
