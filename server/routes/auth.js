const express = require('express')
const { register } = require('../controller/register')
const { login } = require('../controller/login')
const { main } = require('../controller/main')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/main/:id', main)

module.exports = router