'use strict';
const {
  Model
} = require('sequelize');
const Product = require('./product');
const Sale = require('./sale');
module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('saleProduct', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'saleProduct',
    timestamps: false,
    underScore: true,
  });

  SaleProduct.associate = (models) => {
    models.product.belongsToMany(
      models.sale, {
        foreignKey: 'product_id', 
        otherKey: 'sale_id',
        as: 'sales',
        through: SaleProduct
      }
    );
    models.sale.belongsToMany(
      models.product, {
        foreignKey: 'sale_id', 
        otherKey: 'product_id',
        as: 'products',
        through: SaleProduct
      }
    );
  }

  return SaleProduct;
};