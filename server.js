/// <reference path="./typings/tsd.d.ts" />

// modules =================================================
var express        = require('express');
var app            = express();
var cors           = require('cors');
//var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var jwt            = require('express-jwt');
//var dotenv         = require('dotenv');

//dotenv.load();

var authenticate = jwt({
  secret: new Buffer('ntI0YoKsC9YRXm7ZawU2ossNXxggHAjaoonM4a3SUpvMponcYBJfQG_l1iwrefHd', 'base64'),
  audience: 'gkgiKHGp6H1ps4xISZs2kKs1jGFNepGd'
});

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 3080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

app.use(cors());

app.use('/secured', authenticate);

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app