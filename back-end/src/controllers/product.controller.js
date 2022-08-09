const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const { productsService } = require('../services');

const findAll = rescue(async (_req, res, _next) => {
   const allProducts = await productsService.findAll();
   return res.status(StatusCodes.OK).json(allProducts);
});

module.exports = { findAll };
