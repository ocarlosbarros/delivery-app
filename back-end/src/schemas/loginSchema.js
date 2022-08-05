const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2, tlds: { allow: ['com'] },
  }).required(),
  password: joi.string().min(6).required(),
});

module.exports = loginSchema;