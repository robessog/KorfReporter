"use strict";
var express = require('express');
var socket = require('socket.io');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = socket(server);
var portNumber = 8000;
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello from Node JS');
});
io.on('connection', function (socket) {
    console.log('client connected :)');
    socket.on('event', function (data) {
        console.log('event happened');
        console.log(data);
    });
    socket.on('join', function (data) {
        console.log('client sent join message');
        console.warn(data);
    });
    socket.on('disconnect', function (data) {
        console.log('disconnectied');
        console.log(data);
    });
});
server.listen(portNumber, function () {
    console.log('Express! listens on port ' + portNumber);
});
