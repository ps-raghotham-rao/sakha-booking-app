const express = require('express');
const router = express.Router();

const Room = require('../models/roomModel');
const Hotel = require('../models/hotelModel');

router.get('/rooms', (req, res, next) => {
    Room.find({hotel: req.body.hotel})
    .then( rooms => res.send(room) );
});

router.post('/rooms', (req, res, next) => {
    Room.create(req.body)
    .then( room => {
        Hotel.find({name : req.body.hotel})
        .then (hotels => array.forEach(element => {
           element.rooms.push('WORKS') 
        }))
    })
    .then( room => {
        res.send(room);
    }).catch(next);
});

router.put('/rooms/:id', (req, res, next) => {
    Room.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Room.findOne({_id: req.params.id})
        .then( room => {
            res.send(room);
        });
    });
});

router.delete('/rooms/:id', (req, res, next) => {
    Room.findByIdAndRemove({_id: req.params.id})
    .then( room => {
        res.send(room);
    });
});

module.exports = router;