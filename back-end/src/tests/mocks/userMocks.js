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
  password: '2c65c8d7bfbca32a3ed42596192384f6'
};

module.exports = {
  loginBody,
  registerBody,
  registerBodyWithoutName,
  registerBodyWithoutEmail,
  registerBodyWithoutPassword,
  registerReturn
};