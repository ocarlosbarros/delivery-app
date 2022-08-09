'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4, 2),
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    modelName: 'product',
    timestamps: false,
    underScore: true,
  });

  return Product;
};