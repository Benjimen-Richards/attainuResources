var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var port = 1234
var staticpath = path.join(__dirname, './public')
app.use(express.static(staticpath))
app.set('views', './src')
app.set('view engine', "ejs")

app.get('/', (req, res) => {
    res.render('hi from app page')
})

app.get('/city', (re1, res) => {
    res.render('city')
})

app.get('/hotel', (req, res) => {
    res.render('hotel')
})

app.listen(port, (req, res) => {
    if (req) throw req
    console.log('server started')
})

