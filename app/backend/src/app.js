const express = require('express');

const cors = require('cors');

const nf = require('./routes/notasFiscais');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/nf', nf);

module.exports = app;
