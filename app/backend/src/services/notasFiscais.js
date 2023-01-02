const db = require('../database/models');
const { Buyers, Providers } = require('../database/models');

const notasFiscaisService = {
  get: async () => {
    const nf = await db.Orders.findAll({
      attributes: ['orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [
        { model: Buyers, as: 'buyer', attributes: ['name'] },
        { model: Providers, as: 'provider', attributes: ['name'] },
      ],
    });
    return nf;
  },
};

module.exports = notasFiscaisService;
