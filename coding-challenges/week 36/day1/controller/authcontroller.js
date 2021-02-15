const express = require("express")
const parser = require("body-parser")
const Usermodel = require("../model/Usermodel")
const authrouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require('../config')

authrouter.use(parser.urlencoded({ extended: true }))
authrouter.use(parser.json())

authrouter.get('/users', (req, res) => {
    Usermodel.find({}, (err, data) => {
        if (err) throw err
        res.send(data)
    })
})

authrouter.post('/register', (req, res) => {
    var hashpassword = bcrypt.hashSync(req.body.password, 8)
    var userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
        phone: req.body.phone,
        role: req.body.role ? req.body.role : "User"
    }
    Usermodel.create(userData, (err, result) => {
        if (err) throw err
        res.send("Registration success")
    })
})
authrouter.get('/login', (req, res) => {
    Usermodel.findOne({ email: req.body.email }, (err, userData) => {
        if (!userData) {
            res.send("No user found")
        }
        var token = jwt.sign({ id: userData.id }, config.secret, { expiresIn: 3600 })
        res.send({ loggedIn: true, token })
    })
})

authrouter.get('/userinfo', (req, res) => {
    var token = req.headers['usertoken']
    if (!token) {
        res.send("invalid Token")
    }
    jwt.verify(token, config.secret, (err, tokendata) => {
        Usermodel.findById(tokendata.id, (err, data) => {
            if (err) return res.send("Invalid token")
            else if (!data) {
                res.send("No user found")
            }
            else {
                res.send(data)
            }

        })
    })
})

module.exports = authrouter