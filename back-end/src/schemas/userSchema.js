const joi = require('joi');

const userSchema = joi.object({
  name: joi.string().min(12).required(),
  email: joi.string().email({
    minDomainSegments: 2,
  }).required(),
  password: joi.string().min(6).required(),
});

module.exports = userSchema;