const { StatusCodes } = require('http-status-codes');
const loginSchema = require('../schemas/loginSchema');

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    next({ status: StatusCodes.NOT_FOUND, message: error.message });
  }
  next();
};

module.exports = loginValidation;