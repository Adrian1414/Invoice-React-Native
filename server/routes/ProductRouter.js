const express = require("express");
const router = express();
const product = require("../controllers/ProductController");

router
  .post("/", product.addProduct)
//   .get("/", product.fetchCustomers)
//   .delete("/:id", product.deleteCustomer)

module.exports = router;
