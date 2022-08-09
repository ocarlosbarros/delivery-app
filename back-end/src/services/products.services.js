const { product } = require('../database/models');

const findAll = async () => {
    console.log(product);
    const allProducts = await product.findAll();

    return allProducts;
};

module.exports = { findAll };