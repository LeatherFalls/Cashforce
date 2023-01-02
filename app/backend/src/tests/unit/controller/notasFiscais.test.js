/* eslint-disable no-undef */
const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const nfService = require('../../../services/notasFiscais');
const nfController = require('../../../controllers/notasFiscais');
const GET = require('../mock/notasFiscais');

chai.use(chaiAsPromised);

describe('Testing invoices controller', () => {
  describe('When is called the "get" method', () => {
    const req = {};
    const res = {};
    let next = sinon.stub();

    describe('and is invoked with success', () => {
      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        sinon.stub(nfService, 'get').resolves(GET);
      });

      after(() => {
        nfService.get.restore();
      });

      it('returns a status code 200', async () => {
        await nfController.get(req, res, next);
        chai.expect(res.status.calledWith(200)).to.be.equal(true);
      });

      it('returns a json', async () => {
        await nfController.get(req, res, next);
        chai.expect(res.json.calledWith(GET)).to.be.equal(true);
      });
    });

    describe('and is invoked without success', () => {
      const error = new Error('Error');
      before(() => {
        next = sinon.stub().resolves();
        sinon.stub(nfService, 'get').rejects().throws(error);
      });

      after(() => {
        nfService.get.restore();
      });

      it('should return an error', async () => {
        await nfController.get(req, res, next);
        chai.expect(next.calledWith(sinon.match(error))).to.be.equal(true);
      });
    });
  });
});
