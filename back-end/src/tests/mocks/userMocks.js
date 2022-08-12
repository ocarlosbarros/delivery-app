const loginBody = {
  email: 'elizeginsu@hotmiau.com',
  password: 'Pic@dinhO'
};

const registerBody = {
  name: 'Elize Matsunaga',
  email: 'elizeginsu@hotmiau.com',
  role: 'customer',
  password: 'Pic@dinhO'
};

const registerBodyWithoutName = {
  name: '',
  email: 'elizeginsu@hotmiau.com',
  role: 'customer',
  password: 'Pic@dinhO'
};

const registerBodyWithoutEmail = {
  name: 'Elize Matsunaga',
  email: '',
  role: 'customer',
  password: 'Pic@dinhO'
};

const registerBodyWithoutPassword = {
  name: 'Elize Matsunaga',
  email: 'elizeginsu@hotmiau.com',
  role: 'customer',
  password: ''
};

const registerReturn = {
  id: 1,
  name: 'Elize Matsunaga',
  email: 'elizeginsu@hotmiau.com',
  role: 'customer',
  password: 'ca2198ab68c95d4ead8c60bdcd75cb20'
};

module.exports = {
  loginBody,
  registerBody,
  registerBodyWithoutName,
  registerBodyWithoutEmail,
  registerBodyWithoutPassword,
  registerReturn
};