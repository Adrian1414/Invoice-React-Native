const express = require('express')
const router = express()
const user =  require('./UserRouter')
const customer = require('./CustomerRouter')

router.use('/users', user)
router.use('/customers', customer)



module.exports = router