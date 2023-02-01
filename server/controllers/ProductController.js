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

  static async fetchProduct(req, res, next) {
    try {
      const product = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      if (!product) {
        throw { name: "DATA NOT FOUND" };
      }

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const id = req.params.ProductId
      const find = await Product.findByPk(id)
      if(!find) {
        throw { name: 'DATA NOT FOUND' }
      }

      await Product.delete({where: {id}})

      res.status(200).json({message: `${find.name} has been deleted!`})
    } catch (error) {
      
    }
  }
}

module.exports = ProductController;
