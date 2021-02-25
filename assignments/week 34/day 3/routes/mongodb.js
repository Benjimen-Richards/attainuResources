const mongodb = require('mongodb')
const mongourl = 'mongodb://localhost:27017'
const express =  require('express')
const mongoroute = express.Router()
let database
const collectionName = 'postgres'

mongodb.MongoClient.connect(mongourl,(err,connection)=>{
    if(err) console.log("Error while connecting Mongo database")
    database = connection.db("playground")
})

mongoroute.get('/',(req,res)=>{
    database.collection(collectionName).find().toArray((err,result)=>{
        if(result.length>0)
        {return res.send(result)}
        else
        {
            return res.send("<h1>Collection is empty</h1>")
        }
    })
})
mongoroute.post('/adduser',(req,res)=>{
    let data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    database.collection(collectionName).findOne({email:data.email},(err,result)=>
    {
        if(result)
        {
            res.send("Email alrdy exists")
        }
        else
        {
            database.collection(collectionName).insert(data,(err,result)=>{
                if(err) throw err
                return res.send("Upload success")
            })
        }
    })
})

module.exports=mongoroute