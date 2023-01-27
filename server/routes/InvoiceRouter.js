const express = require("express");
const router = express();

const invoice = require("../controllers/InvoiceController");

router
  .post("/:CustomerId/:ProductId", invoice.newInvoice)
  .get("/", invoice.fetchInvoice)
  .get('/:InvoiceId', invoice.invoiceDetail)
  .delete("/:InvoiceId", invoice.deleteInvoice);

module.exports = router;
