const registerRoute = require('express').Router();
const { userValidation } = require('../middlewares');
const { userController } = require('../controllers');

registerRoute.post('/', userValidation, (req, res, next) =>
  userController.createUser(req, res, next));

registerRoute.get('/sellers', (req, res, next) => userController
  .getSellers(req, res, next));

module.exports = {
  registerRoute,
};
