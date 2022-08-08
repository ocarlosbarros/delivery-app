const { StatusCodes } = require('http-status-codes');
const { userSchema } = require('../schemas');

const userValidation = (req, _res, next) => {
  const { nome, email, password } = req.body;
  const { error } = userSchema.validate({ nome, email, password });

  if (error) {
    next({ status: StatusCodes.BAD_REQUEST, message: error.message });
  }
  next();
};

module.exports = userValidation;