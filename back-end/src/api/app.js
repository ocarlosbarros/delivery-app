const express = require('express');
const errorMiddleware = require('../middlewares/error');
const Route = require('../routes');

const app = express();

app.use(express.json());
app.use(Route);
app.use(errorMiddleware);

module.exports = app;
