const { Customer, User, Invoice, Product } = require("../models/index");

class CustomerController {
  static async addCustomer(req, res, next) {
    try {
      const { name, email, phoneNumber } = req.body;
      await Customer.create({ name, email, phoneNumber });

      res.status(201).json({ message: `New Customer Added` });
    } catch (error) {
      next(error);
    }
  }

  static async fetchCustomers(req, res, next) {
    try {
      const customers = await Customer.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!customers) {
        throw { name: "DATA NOT FOUND" };
      }
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCustomer(req, res, next) {
    try {
      const { id } = req.params;
      const findCustomer = await Customer.findByPk(id);

      if (!findCustomer) {
        throw { name: "DATA NOT FOUND" };
      }

      await Customer.destroy({ where: { id } });

      res
        .status(200)
        .json({ message: `${findCustomer.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustomerController;
