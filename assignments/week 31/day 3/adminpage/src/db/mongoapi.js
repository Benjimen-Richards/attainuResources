const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 1234
const mongo = require('mongodb')
const mongourl = `mongodb://localhost:27017`;
const mongoClient = mongo.MongoClient
let database
const col_name = 'users'
const bodyParser = require('body-parser')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/admin', (req, res) => {
    database.collection(col_name).find({}).toArray((err, data) => {
        if (err) {
            console.log('Error with connecting to collections')
        }
        else {
            res.send(data)
        }
    })

})
app.post('/adduser', (req, res) => {
    const data = req.body
    database.collection(col_name).insert(data, (err, result) => {
        if (err) throw err
        res.redirect('/')
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    console.log(mongo.ObjectID(id))
    database.collection(col_name).remove({ _id: mongo.ObjectID(id) }, (err, result) => {
        if (err) {
            console.log('Error with connecting to collections')
        }
    })
})

mongoClient.connect(mongourl, (err, connection) => {
    if (err) {
        console.log('Cannot connect to mongo')
    }
    database = connection.db('benjimen')
    app.listen(port, () => console.log(`Mongo runnong on ${port} `))

})


