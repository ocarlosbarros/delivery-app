const userService = require('./users.services');
const authenticateService = require('./authenticate.service');
const loginService = require('./login.services');
const productsService = require('./products.services');
const orderService = require('./order.services');

module.exports = {
  userService,
  authenticateService,
  loginService,
  productsService,
  orderService,
};