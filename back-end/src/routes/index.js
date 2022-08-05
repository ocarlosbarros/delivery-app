const Router = require('express').Router();
const { registerRoute } = require('./register.routes');
const { loginRoute } = require('./login.routes');

Router.use('/', (_req, res, _next) => res.send({ message: 'ok' }));
Router.use('/login', loginRoute);
Router.use('/register', registerRoute);

module.exports = Router;