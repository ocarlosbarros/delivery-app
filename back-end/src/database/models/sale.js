'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate:  {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW()
    },
    status:  {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    modelName: 'sale',
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      foreignKey: 'userId', as: 'user'
    });

    Sale.belongsTo(models.user, {
      foreignKey: 'sellerId', as: 'seller'
    });
  };

  return Sale;
};