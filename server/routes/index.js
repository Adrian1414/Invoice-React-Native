const express = require('express')
const router = express()
const user =  require('./UserRouter')

router.use('/users', user)


module.exports = router