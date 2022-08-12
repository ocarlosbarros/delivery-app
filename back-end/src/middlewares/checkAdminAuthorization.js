const { StatusCodes } = require('http-status-codes');

const checkAdminAuthorization = async (request, response, next) => {
    const { role } = request.user;
    if (role !== 'administrator') {
        return response.status(StatusCodes.UNAUTHORIZED).json({ message: 'Access denied' });
    }

    return next();
};

module.exports = checkAdminAuthorization;
