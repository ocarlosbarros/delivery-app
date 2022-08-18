const { StatusCodes } = require('http-status-codes');
const { user } = require('../database/models');
const { encrypt } = require('../utils');
const errorHandler = require('../utils/errorHandler');

const createUser = async (body) => {
  const password = encrypt(body.password);
  const checkUser = await user.findOne({
    where: { email: body.email, password },
    attributes: { exclude: ['password'] },
  });

  if (checkUser) {
    throw errorHandler(StatusCodes.CONFLICT, 'User already registered');
  }

  const newUser = await user.create({ ...body, password });

  return newUser;
};

const getSellers = async () => user
  .findAll({
    where: { role: 'seller' },
    attributes: ['id', 'name', 'email'],
  });

const getUsers = async () => user
.findAll({
  attributes: { exclude: ['password'] },
});

module.exports = {
  createUser,
  getSellers,
  getUsers,
};
