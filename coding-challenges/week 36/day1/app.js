const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const cors = require("cors")
const authrouter = require("./controller/authcontroller")
const port = process.env.PORT || 2000
app.use(cors())
require("./database")

app.use('/api/auth', authrouter)

app.listen(port, () => {
    console.log("started", port)
})