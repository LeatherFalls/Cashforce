/* eslint-disable no-undef */
const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const GET = require('../mock/notasFiscais');
const nfModel = require('../../../database/models');

chai.use(chaiAsPromised);

describe('Testing invoices model', () => {
  describe('When is called the "findAll" method', () => {
    describe('and is invoked with success', () => {
      before(() => {
        sinon.stub(nfModel.Orders, 'findAll').resolves(GET);
      });

      after(() => {
        nfModel.Orders.findAll.restore();
      });

      it('returns a array of objects', async () => {
        const response = await nfModel.Orders.findAll();
        chai.expect(response).to.be.a('array');
        response.forEach((invoice) => {
          chai.expect(invoice).to.be.a('object');
        });
      });

      it('returns a array with invoices', async () => {
        const response = await nfModel.Orders.findAll();
        chai.expect(response).to.be.equal(GET);
      });

      it('should not return a empty array', async () => {
        const response = await nfModel.Orders.findAll();
        chai.expect(response).to.have.lengthOf.above(0);
      });
    });
  });
});
