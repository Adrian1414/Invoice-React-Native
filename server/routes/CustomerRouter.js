const express = require("express");
const router = express();
const customer = require("../controllers/CustomerController");

router
  .post("/", customer.addCustomer)
  .get("/", customer.fetchCustomers)
  .delete("/:id", customer.deleteCustomer)

module.exports = router;
