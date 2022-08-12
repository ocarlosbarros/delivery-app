const { user } = require('../database/models');

const findSellerById = async (sellerId) => {
    const founded = await user.findOne({ where: { id: sellerId, role: 'seller' } });
    
    return founded;
};

module.exports = { findSellerById };