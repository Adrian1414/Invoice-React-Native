const { User, Product, Invoice, Customer } = require("../models/index");


class ProductController {
    static async addProduct(req, res, next) {
        try {
          const { name, price, quantity, stock } = req.body;
          const create = await Product.create({ name, price, quantity, stock });
    
          res.status(201).json({ message: `New Product Added` });
        } catch (error) {
          next(error);
        }
      }
}

module.exports = ProductController