const { StatusCodes } = require('http-status-codes');

const { sale, product, user, salesProducts } = require('../database/models');

const adminService = require('./admin.services');

const { errorHandler, validateProducts } = require('../utils');
const { orderFactory } = require('../utils');

const create = async (order) => {
    const { sellerId, products: productOrder } = order;
    
    const sellerFounded = await adminService.findSellerById(sellerId);
    
    if (!sellerFounded) {
        throw errorHandler(StatusCodes.BAD_REQUEST, 'Invalid id seller');
    }
    
    const products = await validateProducts(productOrder);
    const newOrder = orderFactory({ ...order, products });
            
    const { id: saleId } = await sale.create(newOrder);

    products.map(async ({ id: productId, quantity }) => {
        await salesProducts.create({ saleId, productId, quantity });
    });
   
    return saleId;
};

const getAll = async (id, role) => {
    const orders = await sale.findAll({
        where: { [role]: id },
    });
    
    return orders;
};

const getById = async (id, role) => {
    const orders = await sale.findByPk(
        id, {
            include: [
                {
                    model: product,
                    as: 'products',
                },
                {
                    model: user,
                    as: `${role}`,
                },
            ],
        },
    );
    console.log(orders);
    return orders;
};

module.exports = {
    create,
    getAll,
    getById,
};