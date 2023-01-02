/* eslint-disable no-undef */
const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const GET = require('../mock/notasFiscais');
const nfModel = require('../../../database/models/index');
const nfService = require('../../../services/notasFiscais');

describe('Testing invoices service', () => {
  describe('When is called the "get" method', () => {
    describe('and is invoked with success', () => {
      before(() => {
        sinon.stub(nfModel.Orders, 'findAll').resolves(GET);
      });

      after(() => {
        nfModel.Orders.findAll.restore();
      });

      it('returns a array of objects', async () => {
        const response = await nfService.get();
        chai.expect(response).to.be.a('array');
        response.forEach((invoice) => {
          chai.expect(invoice).to.be.a('object');
        });
      });

      it('returns a array with invoices', async () => {
        const response = await nfService.get();
        chai.expect(response).to.be.equal(GET);
      });
    });
  });
});
