const express = require('express');
const errorMiddleware = require('../middlewares/error');
const Route = require('../routes');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(Route);
app.use(errorMiddleware);

module.exports = app;
