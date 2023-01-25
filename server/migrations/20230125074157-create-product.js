'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Please insert product name'
          },
          notEmpty: {
            msg: 'Please insert product name'
          },
        }
      },
      price: {
        type: Sequelize.INTEGER,
        validate: {
          notNull: {
            msg: 'Please insert product price'
          },
          notEmpty: {
            msg: 'Please insert product price'
          },
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        validate: {
          notNull: {
            msg: 'Please insert product quantity'
          },
          notEmpty: {
            msg: 'Please insert product quantity'
          },
        }
      },
      stock: {
        type: Sequelize.INTEGER,
        validate: {
          notNull: {
            msg: 'Please insert product stock'
          },
          notEmpty: {
            msg: 'Please insert product stock'
          },
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};