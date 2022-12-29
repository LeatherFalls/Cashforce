const { Router } = require('express');

const notasFiscaisController = require('../controllers/notasFiscais');

const nfRouter = Router();

nfRouter.get('/', notasFiscaisController.get);

module.exports = nfRouter;
