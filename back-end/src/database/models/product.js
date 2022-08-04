'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
      type: DataTypes.INTEGER,
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    modelName: 'Product',
    timestamps: false,
    underScore: true,
  });

  return Product;
};