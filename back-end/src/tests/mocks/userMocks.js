const loginBody = {
  email: 'bruce@waynenterprises.com',
  password: 'iambatman'
};

const registerBody = {
  name: 'Bruce Wayne',
  email: 'bruce@waynenterprises.com',
  role: 'customer',
  password: 'iambatman'
};

const registerBodyWithoutName = {
  name: '',
  email: 'bruce@waynenterprises.com',
  role: 'customer',
  password: 'iambatman'
};

const registerBodyWithoutEmail = {
  name: 'Bruce Wayne',
  email: '',
  role: 'customer',
  password: 'iambatman'
};

const registerBodyWithoutPassword = {
  name: 'Bruce Wayne',
  email: 'bruce@waynenterprises.com',
  role: 'customer',
  password: ''
};

const registerReturn = {
  id: 1,
  name: 'Bruce Wayne',
  email: 'bruce@waynenterprises.com',
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