const express = require("express");
const router = express();
const user = require("./UserRouter");
const customer = require("./CustomerRouter");
const invoice = require("./InvoiceRouter");
const product = require("./ProductRouter");

router.use("/users", user).use("/customers", customer).use("/invoice", invoice).use('/product', product)

module.exports = router;
