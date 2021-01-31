var express = require('express');
var hotelRouter = express.Router();

function router(menu) {

    //http://localhost:8700/hotel
    hotelRouter.route('/')
        .get(function (req, res) {
            res.render('hotel', { title: "Hotel Page", hoteldata: hotels, menu })
        })

    hotelRouter.route('/details')
        .get(function (req, res) {
            res.send("Hotel Details")
        })

    return hotelRouter
}

module.exports = router;