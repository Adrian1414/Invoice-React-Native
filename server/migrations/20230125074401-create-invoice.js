'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `You must add the customer`
          },
          notEmpty: {
            msg: `You must add the customer`
          },
        },
        references: {
          key: 'id',
          model: 'Customers'
        }
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `You must add the product`
          },
          notEmpty: {
            msg: `You must add the product`
          },
        },
        references: {
          key: 'id',
          model: 'Products'
        }
      },
      note: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: `You must add the due date`
          },
          notEmpty: {
            msg: `You must add the due date`
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
    await queryInterface.dropTable('Invoices');
  }
};