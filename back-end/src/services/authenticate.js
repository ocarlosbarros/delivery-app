require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secret_app';

const authenticate = (user) => {
    const token = jwt.sign(user, SECRET, { expiresIn: '15m' });
    return token;
};

module.exports = authenticate;