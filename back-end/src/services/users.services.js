const { User } = require('../database/models');

const createUser = async (user) => User.create(user);

module.exports = {
  createUser,
};
