export const MIN_PWD_LEN = 6;
export const MIN_NAME_LEN = 12;
export const REGEX_EMAIL = /^.*@.*\.com.*$/;

export const isValidLogin = ({ email, password }) => email
  .match(REGEX_EMAIL) && password.length >= MIN_PWD_LEN;

export const isValidRegister = ({
  email,
  password,
  name,
}) => isValidLogin({ email, password }) && name.length >= MIN_NAME_LEN;

export const saveLogin = ({ name, Email: email, role, token }) => localStorage
  .setItem('user', JSON.stringify({ name, email, role, token }));

export const logout = () => {
  localStorage.removeItem('user');
};

export const totalPrice = (cart) => (cart.length ? cart
  .reduce((a, b) => a + (b.price * b.quantity), 0) : cart.length);
