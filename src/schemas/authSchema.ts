import joi from 'joi';

export const authDataSchema = joi.object({
  email: joi.string().email().required().label('O email é obrigatório'),
  password: joi.string().trim().required().label('A senha é obrigatória')
});
