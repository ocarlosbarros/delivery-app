const orderFactory = (order) => ({
    userId: order.userId,
    sellerId: 2,
    totalPrice: order.totalPrice, 
    deliveryAddress: '', 
    deliveryNumber: 0,
    status: 'Pendente', 
});

module.exports = orderFactory;