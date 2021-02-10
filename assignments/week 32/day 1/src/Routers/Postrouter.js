const express = require('express')
const app = express()
var postrouter = express.Router()
const collection_name = "Posts"
const mongo = require("mongodb")
const mongoClient = mongo.MongoClient
const mongourl = "mongodb://localhost:27017"
let database


postrouter.route('/')
    .get((req, res) => {
        if (!req.session.logintoken) {
            res.redirect("/?message=No Session Found! Please try again")
        }
        database.collection(collection_name).find({}).toArray((err, result) => {
            if (err) throw err
            // console.log("user", req.session.logintoken)
            res.render("posts", { userdata: req.session.logintoken, data: result })
        })

    })

postrouter.route('/addpost')
    .post((req, res) => {
        if (!req.session.logintoken) {
            res.redirect('/?message=login Required')
        }
        // console.log("login session alfred", req.session.logintoken)
        let data = {
            title: req.body.title,
            description: req.body.description,
            createBy: req.session.logintoken.name,
            createrId: req.session.logintoken._id,
            isActive: true,
            tags: req.body.tag,
            date: new Date(Date.now()).toISOString(),
            lastupdatedate: new Date(Date.now()).toISOString()
        }
        // console.log("data", data)
        database.collection(collection_name).insertOne(data, (err, result) => {
            res.send("added post successfully")
        })
    })

postrouter.route('/admin')
    .get((req, res) => {
        database.collection(collection_name).find({}).toArray((err, result) => {
            return res.render("admin", { data: result })
            // return res.send(result)
        })
    })
mongoClient.connect(mongourl, (err, conection) => {
    if (err) throw err
    database = conection.db("benjimen")
})
module.exports = postrouter