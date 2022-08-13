const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const { userService } = require('../services');

const createUser = rescue(async (req, res, _next) => {
  const { name, email, role = 'customer', password } = req.body;
  const result = await userService.createUser({ name, email, role, password });

  return res.status(StatusCodes.CREATED).json(result);
});

const getSellers = async (req, res, _next) => {
  const sellers = await userService.getSellers();
  return res.status(StatusCodes.OK).json(sellers);
};

module.exports = { createUser, getSellers };
