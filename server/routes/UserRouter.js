const express = require('express')
const router = express()
const user = require('../controllers/UserController')

router.post('/register', user.register)
router.post('/login', user.login)

module.exports = router