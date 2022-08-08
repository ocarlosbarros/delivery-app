const Router = require('express').Router();
const { registerRoute } = require('./register.routes');
const { loginRoute } = require('./login.routes');

Router.use('/login', loginRoute);
Router.use('/register', registerRoute);
Router.use('/', (_req, res, _next) => res.send({ message: 'Redirecting...' }));

module.exports = Router;