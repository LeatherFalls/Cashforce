const notasFiscaisService = require('../services/notasFiscais');

const notasFiscaisController = {
  get: async (_req, res, next) => {
    try {
      const nf = await notasFiscaisService.get();
      res.status(200).json(nf);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = notasFiscaisController;
