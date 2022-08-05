const loginRoute = require('express').Router();
const loginValidation = require('../middlewares/loginValidation');
const { loginController } = require('../controllers');

loginRoute.post('/', loginValidation, (req, res, next) =>
  loginController.findByEmail(req, res, next));

module.exports = {
  loginRoute,
};
