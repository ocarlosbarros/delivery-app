const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const { userService } = require('../services');

const createUser = rescue(async (req, res, _next) => {
  const { name, email, password: userPass } = req.body;
  
  let { role } = req.body;
  role = role || 'customer';

  const { password, ...newUser } = await userService
  .createUser({ name, email, role, password: userPass });
  
  return res.status(StatusCodes.CREATED).json(newUser.dataValues);
});

module.exports = { createUser };
