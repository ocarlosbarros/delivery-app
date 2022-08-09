const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const SECRET = process.env.jwt_secret || 'jwt_secret';

const checkAuthorization = async (request, response, next) => {
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