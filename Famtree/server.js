'use strict';
var express = require('express');
var app = express();
var path = require('path');

app.use("/lib", express.static("lib"));
app.use("/css", express.static("css"));
app.use("/scripts", express.static("scripts"));

app.get('/', function (req, res) {
    // test comment
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

