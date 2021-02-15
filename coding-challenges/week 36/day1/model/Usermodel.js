const mongoose = require("mongoose")

const userschema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        role: String,
        phone: String,
    }
)

mongoose.model('users', userschema)

module.exports = mongoose.model('users')