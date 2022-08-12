const { StatusCodes } = require('http-status-codes');
const { product } = require('../database/models');
const errorHandler = require('./errorHandler');

const validateProducts = async (productsList) => {
    const products = await Promise.all(productsList.map(async ({ id, quantity }) => {
        const founded = await product.findOne({ where: { id }, raw: true });
        
        if (!founded) throw errorHandler(StatusCodes.BAD_REQUEST, 'Invalid id product');

        return { ...founded, quantity };
    }));
    
    return products;
};

module.exports = validateProducts;