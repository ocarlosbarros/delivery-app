const chaiHttp = require('chai-http');
const sinon = require('sinon');
const chai = require('chai');
const app = require('../../api/app');
const { user } = require('../../database/models');
const { loginBody, registerBody, registerBodyWithoutName,
  registerBodyWithoutEmail, registerBodyWithoutPassword, registerReturn } = require('../mocks/userMocks');

chai.use(chaiHttp);
const { expect } = chai;

describe('2 - Register', () => {
  describe('createUser method when succeeded', () => {
    beforeEach(() => {
      sinon.stub(user, 'findOne').resolves();
      sinon.stub(user, 'create').resolves(registerReturn);
    });

    afterEach(() => {
      (user.findOne).restore();
      (user.create).restore();
    });

    it('has status 201', async () => {
      const response = await chai.request(app).post('/register').send(registerBody);
      expect(response.status).to.be.equal(201);
    });

    it('has an object with "id", "name", "email" and "role"', async () => {
      const response = await chai.request(app).post('/register').send(registerBody);
      expect(response.body).to.have.all.keys('id', 'name', 'email', 'role', 'password');
    });
  });

  describe('createUser method when fail', () => {
    before(() => {
      sinon.stub(user, 'findOne')
        .onCall(0).resolves(loginBody)
        .onCall(1).resolves()
      sinon.stub(user, 'create').resolves();
    });

    after(() => {
      (user.findOne).restore();
      (user.create).restore();
    });

    it('has status 409 and an error message if it was done with the same email or password', async () => {
      const response = await chai.request(app).post('/register').send(registerBody);
      expect(response.status).to.be.equal(409);
      expect(response.body).to.be.deep.equal({ message: 'User already registered' });
    });

    it('has status 400 and an error message if it was done without name', async () => {
      const response = await chai.request(app).post('/register').send(registerBodyWithoutName);
      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: '"name" is not allowed to be empty' });
    });

    it('has status 400 and an error message if it was done without email', async () => {
      const response = await chai.request(app).post('/register').send(registerBodyWithoutEmail);
      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: '"email" is not allowed to be empty' });
    });

    it('has status 400 and an error message if it was done without password', async () => {
      const response = await chai.request(app).post('/register').send(registerBodyWithoutPassword);
      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({ message: '"password" is not allowed to be empty' });
    });
  });
});