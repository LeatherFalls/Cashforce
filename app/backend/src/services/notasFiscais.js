const db = require('../database/models');

const notasFiscaisService = {
  get: async () => {
    const nf = await db.Orders.findAll();
    return nf;
  },
};

module.exports = notasFiscaisService;
