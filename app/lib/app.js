"use strict";
const express = require('express');
const socket = require('socket.io');
const http = require('http');
var app = express();
var server = http.createServer(app);
var io = socket(server);
var portNumber = 8000;
app.use(express.static('public'));
let gameNamespace = '/gameEvent';
let gameId = 'game15';
app.get('/', (req, res) => {
    res.send('Hello from Node JS');
});
io.on('connection', (socket) => {
    console.log('client connected :)');
    socket.join(gameId);
    socket.on('join', (data) => {
        console.log('client sent join message.');
        console.warn(data);
    });
    socket.on('newGameEvent', (data) => {
        socket.broadcast.emit('newGameEvent', data);
    });
    socket.on('disconnect', (data) => {
        console.log('disconnectied');
        console.log(data);
    });
});
server.listen(portNumber, () => {
    console.log('Express! listens on port ' + portNumber);
});
