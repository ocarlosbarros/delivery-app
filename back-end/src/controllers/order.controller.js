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
   const { role } = req.params;
   const column = role === 'customer' ? 'userId' : 'sellerId';
   const orders = await orderService.getAll(id, column);
   return res.status(StatusCodes.OK).json(orders);
});

const getById = rescue(async (req, res, _next) => {
   const { id, role } = req.params;
   const column = role === 'customer' ? 'seller' : 'user';
   const orders = await orderService.getById(id, column);

   return res.status(StatusCodes.OK).json(orders);
});

const updateStatus = rescue(async (req, res, _next) => {
   const { id } = req.params;
   const { status } = req.body;
   const [, sale] = await orderService.updateStatus(id, status);
   return res.status(StatusCodes.OK).json({ updatedSale: sale });
});

module.exports = {
   create,
   getById,
   getAll,
   updateStatus,
};
