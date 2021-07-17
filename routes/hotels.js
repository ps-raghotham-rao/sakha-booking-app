const express = require('express');
const router = express.Router();

const Hotel = require('../models/hotelModel');

router.get('/hotels', (req, res, next) => {
  
    Hotel.find({name: req.body.name})
    .populate('rooms')
    .exec( (err, hotels) => {
        if(err) { res.send({error: err.message}) }
        else { res.send(hotels) }
    });
});

router.post('/hotels', (req, res, next) => {
    Hotel.create(req.body)
    .then( hotel => {
        res.send(hotel);
    }).catch(next);
});

router.put('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Hotel.findOne({_id: req.params.id})
        .then( hotel => {
            res.send(hotel);
        });
    });
});

router.delete('/hotels/:id', (req, res, next) => {
    Hotel.findByIdAndRemove({_id: req.params.id})
    .then( hotel => {
        res.send(hotel);
    });
});

module.exports = router;