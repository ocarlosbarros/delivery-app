const getTotalPrice = require('./getTotalPrice');

const orderFactory = ({ userId, sellerId, deliveryAddress, deliveryNumber, products }) => ({ 
    userId,
    sellerId,
    totalPrice: products.reduce(getTotalPrice, 0),
    deliveryAddress, 
    deliveryNumber,
    status: 'Pendente',
    });

module.exports = orderFactory;