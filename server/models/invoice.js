'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Invoice.belongsTo(models.Product)
    Invoice.belongsTo(models.Customer)
    }
  }
  Invoice.init({
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    note: DataTypes.STRING,
    dueDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};