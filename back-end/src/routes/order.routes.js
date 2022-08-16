const orderRoute = require('express').Router();
const { orderController } = require('../controllers');

orderRoute.post('/', (req, res, next) => 
    orderController.create(req, res, next));

orderRoute.get('/', (req, res, next) => 
    orderController.getAll(req, res, next));

orderRoute.get('/:id', (req, res, next) => 
    orderController.getById(req, res, next));

module.exports = {
    orderRoute,
};