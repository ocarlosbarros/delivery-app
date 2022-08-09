const Router = require('express').Router();
const { registerRoute } = require('./register.routes');
const { loginRoute } = require('./login.routes');
const { productRoute } = require('./product.routes');

Router.use('/login', loginRoute);
Router.use('/register', registerRoute);
Router.use('/customer/products', productRoute);
Router.use('/', (_req, res, _next) => res.send({ message: 'Redirecting...' }));
module.exports = Router;