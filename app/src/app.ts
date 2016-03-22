import * as express from 'express';

var app = express();

var portNumber = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from Node JS');
});

app.listen(portNumber, () => {
    console.log( 'Express listens on port ' + portNumber);
});
