const getTotalPrice = (acc, item) => {
    const totalPrice = item.quantity * item.price;
    return (acc + totalPrice);
};

module.exports = getTotalPrice;