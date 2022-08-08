export const MIN_PWD_LEN = 6;
export const emailConst = /^.*@.*\.com.*$/;

export const isValid = ({ email, password }) => !email
  .match(emailConst) || password.length < MIN_PWD_LEN;
