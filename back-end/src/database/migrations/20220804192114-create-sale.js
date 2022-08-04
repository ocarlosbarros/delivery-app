'use strict';

// const User = require("../models/user");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        }
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      delivery_address: {
        type: Sequelize.STRING
      },
      delivery_number: {
        type: Sequelize.STRING
      },
      sale_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};