const { user } = require('../database/models');
const encrypt = require('../utils/crypto');

const findByEmail = async (email, pwd) => {
  const password = encrypt(pwd);

  const result = await user.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  if (!result) {
    throw new Error('404');
  }

  return result;
};

module.exports = {
  findByEmail,
};
