const express = require('express');
const { error } = require('../middlewares');
const Route = require('../routes');

const app = express();

app.use(express.json());
app.use(Route);
app.use(error);

module.exports = app;
