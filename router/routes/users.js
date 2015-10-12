'use strict';

var bcrypt = require('bcrypt');
var User = require('../../models/user');

var routes = function(app) {
    app.post('/user/signup', function(req, res) {
        // signup logic
    });
};

module.exports = routes;