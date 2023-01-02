const notasFiscaisService = require('../services/notasFiscais');

const notasFiscaisController = {
  get: async (_req, res, next) => {
    try {
      const nf = await notasFiscaisService.get();

      if (nf.length === 0) res.status(404).json({ message: 'No invoices found' });

      res.status(200).json(nf);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = notasFiscaisController;
