const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/login.services');
const { authenticate } = require('../services');

const findByEmail = rescue(async (req, res, _next) => {
  const { email, password } = req.body;
  const user = await loginService.findByEmail(email, password);
  
  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not found' });
  }
  
  const token = await authenticate(user);
    return res.status(StatusCodes.OK).json({ ...user, token });
});

module.exports = {
  findByEmail,
};