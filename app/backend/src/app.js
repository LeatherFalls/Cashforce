const express = require('express');
const swagger = require('swagger-ui-express');
const cors = require('cors');
const swaggerDocument = require('./swagger/swagger.json');
const nf = require('./routes/notasFiscais');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

app.use('/nf', nf);

module.exports = app;
