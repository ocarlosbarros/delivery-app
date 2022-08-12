const express = require('express');
const Router = require('express').Router();
const { registerRoute } = require('./register.routes');
const { loginRoute } = require('./login.routes');
const { productRoute } = require('./product.routes');
const { orderRoute } = require('./order.routes');
const { adminRoute } = require('./admin.routes');
const { checkAuthorization } = require('../middlewares');
const { checkAdminAuthorization } = require('../middlewares');

Router.use('/login', loginRoute);
Router.use('/register', registerRoute);
Router.use('/customer/products', productRoute);
Router.use('/customer/orders', checkAuthorization, orderRoute);
Router.use('/admin/manage', checkAuthorization, checkAdminAuthorization, adminRoute);

Router.use('/images', express.static('public'));

Router.use('/', (_req, res, _next) => res.send({ message: 'Redirecting...' }));

module.exports = Router;