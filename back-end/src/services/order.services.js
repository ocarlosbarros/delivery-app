const { sale } = require('../database/models');
const { salesProducts } = require('../database/models');
const { getTotalPrice } = require('../utils');
const { orderFactory } = require('../utils');

const create = async (order) => {
    const { userId, products } = order;
    
    const totalPrice = products.reduce(getTotalPrice, 0);

    const defaultSale = orderFactory({ userId, totalPrice });
            
    const { id: saleId } = await sale.create(defaultSale);
    products.map(async ({ id: productId, quantity }) => {
        await salesProducts.create({ saleId, productId, quantity });
    });
   
    return saleId;
};

module.exports = { create };