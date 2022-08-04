'use strict';

// const Product = require("../models/product");
// const Sale = require("../models/sale");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SaleProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sales",
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SaleProducts');
  }
};