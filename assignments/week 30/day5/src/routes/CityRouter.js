var express = require('express');
var cityRouter = express.Router();
var mongodb = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"
function router(menu) {
  cityRouter.route('/')
    .get(function (req, res) {
      mongodb.connect(url, (err, connection) => {
        if (err) {
          res.status(500).send('Erro while connecting')
        }
        else {
          const db = connection.db('benjimen')
          db.collection('hotels').find({}).toArray((err, data) => {
            if (err) res.status(501).send('Error while fetching')
            else {
              // res.send(data)
              res.render('city', { title: "City Page", citydata: data, menu })

            }
          })
        }
      })
    })

  //http://localhost:8700/city/details
  cityRouter.route('/details/:id')
    .get(function (req, res) {
      var id = req.params.id
      mongodb.connect(url, (err, connection) => {
        if (err) res.status(500).send('Error while connection')
        else {
          const dbo = connection.db('benjimen')
          dbo.collection('hotels').findOne({ _id: id }, (err, data) => {
            if (err) res.status(501).send('Error while fetching')
            else {
              res.render('citydetails', { title: "City detail page", citydata: data, menu })
            }
          })
        }
      })
    })

  return cityRouter
}

module.exports = router;