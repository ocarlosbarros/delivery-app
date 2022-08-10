const express = require('express');
const cors = require('cors');
const { error } = require('../middlewares');
const Route = require('../routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(Route);
// app.use('/foto', express.static('../../public'));
app.use(error);

module.exports = app;
