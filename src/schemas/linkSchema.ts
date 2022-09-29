import joi from 'joi';

export const linkCreateDataSchema = joi.object({
  phone_number: joi
    .string()
    .regex(/^[0-9]{11}$/)
    .label('Numero de telefone deve ter 11 digitos')
    .required(),
  custom_message: joi.string().required().label('Informe a mensagem do link'),
  is_active: joi.bool().required().label('Status deve ser true ou false')
});
