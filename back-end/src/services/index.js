const userService = require('./users.services');
const authenticate = require('./authenticate');
const loginService = require('./login.services');
const productsService = require('./products.services');
const orderService = require('./order.services');

module.exports = {
  userService,
  authenticate,
  loginService,
  productsService,
  orderService,
};