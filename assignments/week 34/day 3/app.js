const mongodb = require('mongodb')
const mongourl = 'mongodb://localhost:27017'
const express =  require('express')
const pg = require('pg')
const port  = 1111
const app = express()
const parser = require('body-parser')
const mongoroute = require('./routes/mongodb')
const postgresRoute = require('./routes/postgres')
let database
const collectionName = 'postgres'

app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

app.use('/usermongo',mongoroute)
app.use('/usersql',postgresRoute)

mongodb.MongoClient.connect(mongourl,(err,connection)=>{
    if(err) console.log("Error while connecting Mongo database")
    database = connection.db("playground")
    app.listen(port,()=>console.log("port on ",port))
})