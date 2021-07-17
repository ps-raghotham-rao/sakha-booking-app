const express = require('express');
const router = express.Router();

const Booking = require('../models/bookingModel');

router.get('/bookings', (req, res, next) => {
    Booking.find({hotel: req.body.hotel})
    .then( rooms => res.send(room) );
});

router.post('/bookings', (req, res, next) => {
    Booking.create(req.body)
    .then( booking => {
        res.send(booking);
    }).catch(next);
});

router.put('/bookings/:id', (req, res, next) => {
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Booking.findOne({_id: req.params.id})
        .then( booking => {
            res.send(booking);
        });
    });
});

router.delete('/bookings/:id', (req, res, next) => {
    Booking.findByIdAndRemove({_id: req.params.id})
    .then( booking => {
        res.send(booking);
    });
});

module.exports = router;