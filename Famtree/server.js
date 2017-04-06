'use strict';
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// API

app.use("/api/person", require('./api/person'));

// statics

app.use("/lib", express.static("lib"));
app.use("/css", express.static("css"));
app.use("/fonts", express.static("fonts"));
app.use("/scripts", express.static("scripts"));

// index page

app.get('/', function (req, res) {
    // test comment
    res.sendFile(path.join(__dirname + '/index.html'));
});

// set server's listening port

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

