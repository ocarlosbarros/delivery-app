const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const { orderService } = require('../services');

const create = rescue(async (req, res, _next) => {
   const products = req.body;
   const { id: userId } = req.user;
   
   const order = { userId, products };
   
   const id = await orderService.create(order);
  
   return res.status(StatusCodes.CREATED).json({ id });
});

module.exports = { create };
