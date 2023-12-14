// const mysql = require('mysql')

// exports.db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Awsedrftgyhujikolp@123",
//     database:"registerlogin"
// })

const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment');

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/registerlogin")
        .then(() => {
            console.log("MongoDb Connected")
            // autoIncrement.initialize(mongoose.connection);
        })
    .catch(err => console.log("Mongo Err: ", err))
}

module.exports = connectDB;