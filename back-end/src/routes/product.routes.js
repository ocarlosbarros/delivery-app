const productRoute = require('express').Router();
const { productController } = require('../controllers');

productRoute.get('/', (req, res, next) => 
    productController.findAll(req, res, next));
    
module.exports = {
    productRoute,
};