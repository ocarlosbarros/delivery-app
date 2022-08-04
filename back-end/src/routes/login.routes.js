const loginRoute = require('express').Router();
// const { userController } = require('../controllers');

loginRoute.post('/', (req, res, _next) => res.send({ message: 'ok' }));

module.exports = {
  loginRoute,
};
