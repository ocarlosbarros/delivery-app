const { sale } = require('../database/models');
const { saleProduct } = require('../database/models');

const create = async (order) => {
    const { userId, products } = order;
    
    const totalPrice = products.reduce((acc, item) => {
        const totalPrice = item.quantity * item.price;
        return (acc + totalPrice);
    }, 0)

    const defaultSale = {
        user_id: userId,
        seller_id: 2,
        total_price: totalPrice, 
        delivery_address: '', 
        delivery_number: 0,
        sale_date: Date.now(),
        status: 'Pendente' 
    }
            
    const { id: sale_id } = await sale.create(defaultSale);
    
    products.map(async ({ id: product_id, quantity }) => {
        await saleProduct.create({ sale_id, product_id, quantity})
    });
   
    return sale_id;
}

module.exports = { create };