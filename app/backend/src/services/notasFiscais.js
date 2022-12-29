const db = require('../database/models');
const { Buyers, Providers } = require('../database/models');

const notasFiscaisService = {
  get: async () => {
    const nf = await db.Orders.findAll({
      include: [
        { model: Buyers, as: 'buyer' },
        { model: Providers, as: 'provider' },
      ],
    });
    return nf;
  },
};

module.exports = notasFiscaisService;
