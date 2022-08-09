const { StatusCodes } = require('http-status-codes');
const { userSchema } = require('../schemas');

const userValidation = (req, _res, next) => {
  const { name, email, password } = req.body;
  const { error } = userSchema.validate({ name, email, password });
  if (error) {
    return next({ status: StatusCodes.BAD_REQUEST, message: error.message });
  }
  return next();
};

module.exports = userValidation;