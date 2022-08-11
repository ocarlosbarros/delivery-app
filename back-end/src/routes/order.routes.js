const orderRoute = require('express').Router();
const { orderController } = require('../controllers');

orderRoute.post('/', (req, res, next) => 
    orderController.create(req, res, next));
    
module.exports = {
    orderRoute,
};