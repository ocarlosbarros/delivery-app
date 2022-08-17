const adminRoute = require('express').Router();
const { userController } = require('../controllers');

adminRoute.post('/', (req, res, next) => {
  userController.createUser(req, res, next);
});

module.exports = {
    adminRoute,
};
