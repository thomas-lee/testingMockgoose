'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false});

require('./router')(app);

app.listen(3000);

module.exports = app;