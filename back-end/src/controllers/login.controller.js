// const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/login.services');

const findByEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.findByEmail(email, password);
  
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not found' });
    }
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    return next({ status: error.message, message: error.message });
  }
};

module.exports = {
  findByEmail,
};