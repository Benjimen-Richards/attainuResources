const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const mongourl = "mongodb://localhost:27017"
const port = process.env.PORT || 1111
const path = require('path')

const app = express()
const session = require('express-session')
const { json } = require('body-parser')




let database
const collection_name = 'blog'

const postrouter = require('../Routers/Postrouter')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//static files

const staticpath = path.join(__dirname, "../../public")
const viewpath = path.join(__dirname, "../views")
// console.log(viewpath)
app.use(express.static(staticpath))
app.set("views", viewpath)
app.set("view engine", "ejs")




//generate token

app.use('/health', (req, res) => {
    res.send('Health ok')
})
app.use(session({
    secret: 'mylogintoken'
}))

//Routes

app.get('/', (req, res) => {
    let message = req.query.message ? req.query.message : ''
    return res.render("login", { message })
})
app.get('/allusers', (req, res) => {
    database.collection(collection_name).find().toArray((err, result) => {
        res.send(result)
    })
})
app.get('/register', (req, res) => {
    let message = req.query.message ? req.query.message : ''
    return res.render("register", { message })
})
app.get('/allusers', (req, res) => {
    // console.log('==>', req.session.logintoken)
    if (!req.session.logintoken) {
        return res.send("No Session found")
    }
    if (req.session.logintoken.role !== "Admin") {
        return res.send("You are not admin")
    }
    database.collection(collection_name).find({}).toArray((err, result) => {
        return res.send(result)
    })
})

app.get('/logout', (req, res) => {
    req.session.logintoken = null
    return res.redirect("/")
})
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    database.collection(collection_name).remove({ _id: mongodb.ObjectID(id) }, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.post('/register', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role ? req.body.role : "User",
        isActive: true
    }

    database.collection(collection_name).findOne({ email: user.email }, (err, data) => {
        if (data) {
            return res.redirect('/register?message=Email already taken')
        }
        else {
            database.collection(collection_name).insert(user, (err, result) => {
                if (err) throw err
                return res.redirect("/?message=Registration successfull")
            })
        }
    })
})


app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    database.collection(collection_name).findOne(user, (err, result) => {
        if (err || !result) {
            return res.redirect('/?message=Invalid credentials')
        }
        else {
            req.session.logintoken = result
            return res.redirect("/post")
        }
    })
})

//Post router
app.use('/post', postrouter)


// connecting to mongodb
mongoClient.connect(mongourl, (err, connection) => {
    database = connection.db('benjimen')
    app.listen(port, (err, result) => {
        if (err) console.log('Cannot cannot to database')
        console.log('Connection successful on', port)
    })
})