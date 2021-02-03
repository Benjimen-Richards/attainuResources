const express = require('express');
const app = express();
const port = process.env.PORT || 1111;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = `mongodb://localhost:27017`;
const path = require('path');
let dbobj;
let col_name = "users";
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const staticpath = path.join(__dirname, 'public')
const viewpath = path.join(__dirname, './src/views')
// console.log(viewpath)
app.use(express.static(staticpath))
app.set('views', viewpath)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    dbobj.collection(col_name).find({}).toArray((err, result) => {
        if (err) throw err
        res.render('index', { data: result })
        // res.send(result)
    })
})

app.get('/health', (req, res) => {
    res.status(200).send('Health ok')
})


app.get('/new', (req, res) => {
    res.render('admin')
})
app.post('/adduser', (req, res) => {
    const data = {
        "name": req.body.name,
        "city": req.body.city,
        "phone": req.body.phone,
        "role": req.body.role ? req.body.role : "User",
        "email": req.body.email

    }
    dbobj.collection(col_name).insert(data, (err, result) => {
        if (err) throw err
        // res.status(200).send('Data added')
        res.redirect('/')
    })
})
app.get('/users', (req, res) => {
    var query = {}
    if (req.query.city & req.query.role) {
        query = { city: req.query.city, role: req.query.role }
    }
    else if (req.query.city) {
        query = { city: req.query.city }
    }
    else if (req.query.role) {
        query = { role: req.query.role }
    }
    else {
        query = { isactive: true }
    }
    dbobj.collection(col_name).find(query).toArray((err, result) => {
        if (err) throw err
        res.status(200).send(result)
    })
})

app.delete('/deleteuser', (req, res) => {
    var id = req.body._id
    id = mongo.ObjectID(id)
    dbobj.collection(col_name).remove({ _id: id }, (err, result) => {
        if (err) throw err
        res.send('Data deleted')
    })
})
app.put('/deactivate', (req, res) => {
    var id = req.body._id
    dbobj.collection(col_name).update(
        { _id: mongo.ObjectID(id) },
        {
            $set: {
                isactive: false
            }
        }, (err, result) => {
            if (err) throw err
            res.send('data updated')
        }
    )
})

app.put('/edituser', (req, res) => {
    var id = req.body._id
    dbobj.collection(col_name).update(
        { _id: mongo.ObjectID(id) },
        {
            $set: {
                name: req.body.name,
                city: req.body.city,
                phone: req.body.phone,
                isactive: req.body.isactive
            }
        }, (err, result) => {
            if (err) throw err
            res.send('data updated')
        }
    )
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    dbobj.collection(col_name).find({ _id: mongo.ObjectID(id) }).toArray((err, result) => {
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
    console.log('started', port)
})