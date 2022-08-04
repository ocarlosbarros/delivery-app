const express = require('express');
const Route = require('../routes');

const app = express();

app.use(express.json());
app.use(Route);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
