const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services');
const { authenticateService } = require('../services');

const findByEmail = rescue(async (req, res, _next) => {
  const { email, password } = req.body;
  const user = await loginService.findByEmail(email, password);
  
  const token = await authenticate(user);

  return res.status(StatusCodes.OK).json({ ...user, token });
});

module.exports = {
  findByEmail,
};