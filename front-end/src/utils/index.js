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
