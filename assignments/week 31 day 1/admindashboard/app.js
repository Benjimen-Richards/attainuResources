const express = require('express')
const port = 1111
const cors = require('cors')
const app = express()
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const bodyParser = require('body-parser');
const mongourl = `mongodb://localhost:27017`;
let dbobj
const col_name = 'users'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.get('/', (req, res) => {
    dbobj.collection(col_name).find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})



MongoClient.connect(mongourl, (err, connection) => {
    if (err) {
        console.log('Error connecting')
    }
    dbobj = connection.db('benjimen')
    app.listen(1234, () => {
        console.log('connected')
    })
})

app.listen(port, () => {
    console.log('started')
})