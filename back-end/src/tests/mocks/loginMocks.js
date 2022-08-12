const loginBody = {
  email: 'susukiller@hotmiau.com',
  password: 'camisasempresujinhadesangue'
};

const loginBodyWithoutRegister = {
  email: 'matsusu@hotmiau.com',
  password: 'tudoempedacinhos'
};

const loginBodyWithoutEmail = {
  email: '',
  password: 'camisasempresujinhadesangue'
};

const loginBodyWithoutPassword = {
  email: 'susukiller@hotmiau.com',
  password: ''
};

const loginReturn = {
  id: 4,
	name: 'Suzana Von Richthofen',
  email: 'susukiller@hotmiau.com',
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