const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { getSecret } = require('../utils');


const checkAuthorization = async (request, response, next) => {
  const SECRET = await getSecret();
  try {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }

    const { password, ...user } = jwt.verify(authorization, SECRET);
    request.user = user;
    return next();
  } catch (error) {
    return response.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or Invalid Token' });
  }
};

module.exports = checkAuthorization;