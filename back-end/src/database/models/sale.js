'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_number:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sale_date:  {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status:  {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    modelName: 'Sale',
    timestamps: false,
    underScore: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'user'
    }, {
      foreignKey: 'seller_id', as: 'seller'
    });
  };

  return Sale;
};