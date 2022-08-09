const { StatusCodes } = require('http-status-codes');
const { loginSchema } = require('../schemas');

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    return next({ status: StatusCodes.NOT_FOUND, message: error.message });
  }
  return next();
};

module.exports = loginValidation;