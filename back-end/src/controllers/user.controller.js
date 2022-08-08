const rescue = require('express-rescue');
const { userService } = require('../services');

const createUser = rescue(async (req, res, _next) => {
  const { name, email, role, password } = req.body;
  const result = await userService.createUser({ name, email, role, password });
  return res.status(201).json(result);
});

module.exports = { createUser };
