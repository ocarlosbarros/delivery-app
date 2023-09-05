const loginBody = {
  email: 'bruce@waynenterprises.com',
  password: 'iambatman'
};

const loginBodyWithoutRegister = {
  email: 'grey_jean@xmen.com',
  password: 'phoenix123'
};

const loginBodyWithoutEmail = {
  email: '',
  password: 'iambatman'
};

const loginBodyWithoutPassword = {
  email: 'bruce@waynenterprises.com',
  password: ''
};

const loginReturn = {
  id: 1,
	name: 'Bruce Wayne',
  email: 'bruce@waynenterprises.com',
	role: 'customer',
	token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IlN1emFuYSBWb24gUmljaHRob2ZlbiAiLCJlbWFpbCI6InN1c3VraWxsZXJAaG90bWlhdS5jb20iLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NjAzMTU3MDQsImV4cCI6MTY2MDMxNjYwNH0.YVL6bpaS0R1W2BDFsUsPFWsEKQoxMMjUc6qKBU7mu5o'
};

module.exports = {
  loginBody,
  loginBodyWithoutRegister,
  loginBodyWithoutEmail,
  loginBodyWithoutPassword,
  loginReturn
};