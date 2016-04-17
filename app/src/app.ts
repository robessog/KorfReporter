import * as express from 'express';
import * as socket from 'socket.io';
import * as http from 'http';

var app = express();
var server = http.createServer(app);
var io = socket(server);
var portNumber = 8000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from Node JS');
});

io.on('connection', (socket) => {
    console.log('client connected :)');

    socket.on('event', (data: any) => {
        console.log('event happened');
        console.log(data);
    });
    socket.on('join', (data: any) => {
        console.log('client sent join message');
        console.warn(data);
    });
    socket.on('disconnect', (data: any) => {
        console.log('disconnectied');
        console.log(data);
    });
});

server.listen(portNumber, () => {
    console.log( 'Express! listens on port ' + portNumber);
});
