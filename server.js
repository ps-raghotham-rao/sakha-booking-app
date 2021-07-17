const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

const port = 8000;

app.use(express.Router().get('/', (req, res) => {res.send('Room Booking');}));
app.use(express.Router().get('/api', (req, res) => {res.send('API');}));
app.use('/api', require('./routes/hotels'));
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/bookings'));
app.use('/api', require('./routes/rooms'));

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

app.listen(port, () => {
    console.log(`listening for requests on port: ` + port)
});
