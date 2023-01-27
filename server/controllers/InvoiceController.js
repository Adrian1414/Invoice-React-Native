const { Invoice, Customer, Product, User } = require("../models/index");

class InvoiceController {
  static async fetchInvoice(req, res, next) {
    try {
      const invoice = await Invoice.findAll();

      res.status(200).json(invoice);
    } catch (error) {
      next(error);
    }
  }

  static async newInvoice(req, res, next) {
    try {
      const { CustomerId, ProductId } = req.params;
      const { note, dueDate } = req.body;

      const invoice = await Invoice.create({
        CustomerId,
        ProductId,
        note,
        dueDate,
      });

      res.status(201).json({
        CustomerId: invoice.CustomerId,
        ProductId: invoice.ProductId,
      });
    } catch (error) {
     next(error)
    }
  }

  static async invoiceDetail(req, res, next) {
    try {
    const {InvoiceId} = req.params;
      const find = await Invoice.findOne({
        include: [
          { model: Product,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: Customer,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
        where: { id: InvoiceId },
      });

      if (!find) {
        throw { name: "DATA NOT FOUND" };
      }

      res.status(200).json(find);
    } catch (error) {
      next(error)
    }
  }

  static async deleteInvoice (req, res, next) {
    try {
      const { InvoiceId } = req.params

      const find = await Invoice.findByPk(InvoiceId)

      if(!find) {
        throw { name: "DATA NOT FOUND" };
      } 
      await Invoice.destroy({ where: { id: InvoiceId } });
      
      res.status(200).json({message: `Invoice id ${find.id} deleted`});
    } catch (error) {
      next(error)
    }
  }
}

module.exports = InvoiceController;
