const joi = require('joi');

const userSchema = joi.object({
  name: joi.string().max(12).required(),
  email: joi.string().email({
    minDomainSegments: 2, tlds: { allow: ['com'] },
  }).required(),
  password: joi.string().min(6).required(),
});

module.exports = userSchema;