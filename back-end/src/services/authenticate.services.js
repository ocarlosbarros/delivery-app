const jwt = require('jsonwebtoken');
const { getSecret } = require('../utils');

const authenticate = async (user) => {
    const secret = await getSecret();

    if (!secret) throw new Error();
    
    const token = jwt.sign(user, secret);
    return token;
};

module.exports = authenticate;