const express = require('express');

const nf = require('./routes/notasFiscais');

const app = express();

app.use(express.json());

app.use('/nf', nf);

module.exports = app;
