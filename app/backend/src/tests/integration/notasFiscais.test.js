/* eslint-disable no-undef */
const sinon = require('sinon');
const chai = require('chai');
const http = require('chai-http');

const nfModel = require('../../database/models');
const GET = require('../unit/mock/notasFiscais');

chai.use(http);

describe('Testing get method', () => {
  it('should return status 200', async () => {
    sinon.stub(nfModel.Orders, 'findAll').resolves(GET);

    const response = await chai.request('http://localhost:3000').get('/nf');

    chai.expect(response).to.have.status(200);

    sinon.restore();
  });
});
