var express = require('express')
var path = require('path')
const app = express()
const port = process.env.PORT || 1234
var request = require('request')

console.log()
app.use(express.static(path.join(__dirname + '/public')))

app.set('views', './src/views')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, (err) => console.log("server started"))