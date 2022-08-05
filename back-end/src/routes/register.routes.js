const registerRoute = require('express').Router();
const { userController } = require('../controllers');

registerRoute.post('/', (req, res, next) =>
  userController.createUser(req, res, next));

module.exports = {
  registerRoute,
};
