const userService = require('./users.services');
const authenticateService = require('./authenticate.services');
const loginService = require('./login.services');
const productsService = require('./products.services');
const orderService = require('./order.services');
const adminService = require('./admin.services');

module.exports = {
  userService,
  authenticateService,
  loginService,
  productsService,
  orderService,
  adminService,
};