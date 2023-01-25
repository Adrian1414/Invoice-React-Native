const { User, Product, Invoice, Customer } = require("../models/index");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, phoneNumber, companyName } = req.body;
      const regist = await User.create({
        email,
        password,
        phoneNumber,
        companyName,
      });

      res
        .status(201)
        .json({ message: `email: ${regist.email}, Account Registered!` });
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "BAD_REQUEST" };
      }
      const find = await User.findOne({ where: { email } });
      if (!find) {
        throw { name: "INVALID_CREDENTIALS" };
      }
      const compare = comparePassword(password, find.password);
      if(!compare) {
        throw { name: 'INVALID_CREDENTIALS'}
      }

      const payload = { id: find.id}
      const access_token = createToken(payload)

      res.status(200).json({ access_token, email: find.email })

    } catch (error) {
        next(error)
    }
  }
}

module.exports = UserController;
