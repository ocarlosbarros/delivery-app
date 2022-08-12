const chaiHttp = require('chai-http');
const sinon = require('sinon');
const chai = require('chai');
const app = require('../../api/app');
const { user } = require('../../database/models');
const { loginBody, loginBodyWithoutRegister, loginBodyWithoutEmail, 
  loginBodyWithoutPassword, loginReturn } = require('../mocks/loginMocks');

chai.use(chaiHttp);
const { expect } = chai;

describe('1 - Login', () => {
  describe('findByEmail method when succeeded', () => {
    before(() => {
      sinon.stub(user, 'findOne').resolves(loginReturn)
    });

    after(() => {
      (user.findOne).restore();
    });

    it('has status 200', async () => {
      const response = await chai.request(app).post('/login').send(loginBody);
      expect(response.status).to.be.equal(200);
    });

    it('has an object with "id", "name", "email", "role" and "token"', async () => {
      const response = await chai.request(app).post('/login').send(loginBody);
      expect(response.body).to.have.keys('id', 'name', 'email', 'role', 'token');
    });
  });

  describe('findByEmail method when fail', () => {
    before(() => {
      sinon.stub(user, 'findOne').resolves()
    });

    after(() => {
      (user.findOne).restore();
    });

    it('has status 404 and an error message if it was done with an unregistered user or wrong email or password', async () => {
      const response = await chai.request(app).post('/login').send(loginBodyWithoutRegister);
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: 'User not found' });
    });

    it('has status 404 and an error message if it was done without email', async () => {
      const response = await chai.request(app).post('/login').send(loginBodyWithoutEmail);
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: '"email" is not allowed to be empty' });
    });

    it('has status 404 and an error message if it was done without password', async () => {
      const response = await chai.request(app).post('/login').send(loginBodyWithoutPassword);
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: '"password" is not allowed to be empty' });
    });
  });
});