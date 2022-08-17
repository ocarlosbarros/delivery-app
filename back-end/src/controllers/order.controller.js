const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const { orderService } = require('../services');

const create = rescue(async (req, res, _next) => {
   const order = req.body;
   const { id: userId } = req.user;
   
   const id = await orderService.create({ userId, ...order });
  
   return res.status(StatusCodes.CREATED).json({ id });
});

const getAll = rescue(async (req, res, _next) => {
   const { id } = req.user;
   const orders = await orderService.getAll(id);

   return res.status(StatusCodes.OK).json(orders);
});

const getById = rescue(async (req, res, _next) => {
   const { id } = req.params;

   const orders = await orderService.getById(id);

   return res.status(StatusCodes.OK).json(orders);
});

module.exports = {
   create,
   getById,
   getAll,
};
