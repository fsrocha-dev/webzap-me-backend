import joi from 'joi';

export const userCreateDataSchema = joi.object({
  name: joi.string().required(),
  last_name: joi.string().required(),
  commercial_name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.number().min(1).max(100).required(),
  confirm_password: joi.string().required().valid(joi.ref('password'))
});
