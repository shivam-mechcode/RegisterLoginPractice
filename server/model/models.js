const mongoose = require('mongoose')
// const connectDB = require('../connect')


const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
    }
})

const user = mongoose.model("user", userScheme)

module.exports = user