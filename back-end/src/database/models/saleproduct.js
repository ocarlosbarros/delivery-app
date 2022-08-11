'use strict';
const {
  Model
} = require('sequelize');
const Product = require('./product');
const Sale = require('./sale');
module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('salesProducts', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SaleProduct.associate = (models) => {
    models.product.belongsToMany(
      models.sale, {
        foreignKey: 'productId', 
        otherKey: 'saleId',
        as: 'sales',
        through: SaleProduct
      }
    );
    models.sale.belongsToMany(
      models.product, {
        foreignKey: 'saleId', 
        otherKey: 'productId',
        as: 'products',
        through: SaleProduct
      }
    );
  }

  return SaleProduct;
};