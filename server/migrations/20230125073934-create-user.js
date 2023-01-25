'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please insert your email'
          },
          notEmpty: {
            msg: 'Please insert your email'
          },
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Please insert your password'
          },
          notEmpty: {
            msg: 'Please insert your password'
          },
        }
      },
      phoneNumber: {
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Please insert your phone number'
          },
          notEmpty: {
            msg: 'Please insert your phone number'
          },
        }
      },
      companyName: {
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'Please insert your company name'
          },
          notEmpty: {
            msg: 'Please insert your company name'
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
    await queryInterface.dropTable('Users');
  }
};