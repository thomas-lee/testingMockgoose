'use strict';

var bcrypt = require('bcrypt');
var User = require('../../models/user');

var routes = function(app) {
    app.post('/user/signup', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        
        User.findOne({email: email}, function(err, result) {
            if(err) return res.sendStatus(500);
            if (result) {
                return res.json({success: false, error: 'user with that email already exists'});
            }
            // user does not yet exist
            // generate a password hash
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            
            User.create({email: email, password: hash}, function(err, user) {
                if(err) return res.sendstatus(500);
                user = user.toObject();
                delete user.password;
                res.json({success: true, user: user});
            });
        });
    });
};

module.exports = routes;