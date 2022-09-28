import joi from 'joi';

export const userCreateDataSchema = joi.object({
  name: joi.string().required().label('Nome é obrigatório'),
  last_name: joi.string().required().label('Sobrenome é obrigatório'),
  commercial_name: joi
    .string()
    .required()
    .label('Nome comercial é obrigatório'),
  email: joi.string().email().required().label('Informe um e-mail válido'),
  password: joi.string().trim().required().label('Senha é obrigatório'),
  confirm_password: joi
    .string()
    .trim()
    .required()
    .valid(joi.ref('password'))
    .label('O campo de confirmação deve ser idêntico a senha digitada')
});
