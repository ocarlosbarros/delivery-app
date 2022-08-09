const productRoute = require('express').Router();

productRoute.get('/', (_req, _res, _next) => {
    console.log('Not implemented');
});
  
module.exports = {
    productRoute,
};