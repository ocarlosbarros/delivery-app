const md5 = require('md5');

const encrypt = (password) => md5(password);

module.exports = encrypt;