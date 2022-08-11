const { StatusCodes } = require('http-status-codes');
const { sale } = require('../database/models');
const { salesProducts } = require('../database/models');
const { product } = require('../database/models');
const { getTotalPrice, errorHandler } = require('../utils');
const { orderFactory } = require('../utils');

const create = async (order) => {
    const { userId, products } = order;
    
    const allProducts = await product.findAll();
    
    const ids = allProducts.map(({ id }) => id);

    const exists = products.every(({ id }) => ids.includes(id));

    if (!exists) {
        throw errorHandler(StatusCodes.BAD_REQUEST, 'Invalid id');
    }

    const totalPrice = products.reduce(getTotalPrice, 0);

    const defaultSale = orderFactory({ userId, totalPrice });
            
    const { id: saleId } = await sale.create(defaultSale);

    products.map(async ({ id: productId, quantity }) => {
        await salesProducts.create({ saleId, productId, quantity });
    });
   
    return saleId;
};

const getById = async (userId) => {
    const orders = await sale.findAll({
        where: { userId },
        attributes: { exclude: ['userId', 'sellerId', 'deliveryAddress', 'deliveryNumber'] },
    });
    
    return orders;
};

module.exports = {
    create,
    getById,
};