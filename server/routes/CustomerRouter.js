const express = require('express')
const router = express()
const customer = require('../controllers/CustomerController')

router.post('/', customer.addCustomer)
router.get('/', customer.fetchCustomers)
router.delete('/:id', customer.deleteCustomer)

module.exports = router