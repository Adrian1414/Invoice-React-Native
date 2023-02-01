const express = require("express");
const router = express();
const product = require("../controllers/ProductController");

router
  .post("/", product.addProduct)
  .get("/", product.fetchProduct)
  .delete("/:ProductId", product.deleteProduct)

module.exports = router;
