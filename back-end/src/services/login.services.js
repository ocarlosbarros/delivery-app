const { StatusCodes } = require('http-status-codes');
const { user } = require('../database/models');
const errorHandler = require('../utils/errorHandler');
const encrypt = require('../utils/crypto');

const findByEmail = async (email, pwd) => {
  const password = encrypt(pwd);

  const result = await user.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
    raw: true, 
  });

  if (!result) {
    throw errorHandler(StatusCodes.NOT_FOUND, 'User not found');
  }

  return result;
};

module.exports = {
  findByEmail,
};
