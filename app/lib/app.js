"use strict";
var express = require('express');
var app = express();
var portNumber = 8000;
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello from Node JS');
});
app.listen(portNumber, function () {
    console.log('Express listens on port ' + portNumber);
});
