const express = require('express')
const authRoute = require('./routes/auth')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const connectdb = require('./connect')

app.use(cookieParser())
app.use(cors())
app.use(express.json())
connectdb();

app.use('/', authRoute)

app.listen(3002, (req, res) => {
    console.log("Server is listening")
})