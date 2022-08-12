const error = require('./error');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const checkAuthorization = require('./checkAuthorization');
const checkAdminAuthorization = require('./checkAdminAuthorization');

module.exports = {
  error,
  loginValidation,
  userValidation,
  checkAuthorization,
  checkAdminAuthorization,
};