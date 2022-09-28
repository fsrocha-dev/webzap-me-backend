import joi from 'joi';

export const campaignCreateDataSchema = joi.object({
  name: joi.string().required().label('Nome é obrigatório'),
  proposal: joi.string().required().label('Proposta da campanha é obrigatória'),
  is_active: joi.bool().required().label('Status deve ser true ou false')
});

export const campaignUpdateDataSchema = joi.object({
  name: joi.string().required().label('Nome é obrigatório'),
  proposal: joi.string().required().label('Proposta da campanha é obrigatória'),
  is_active: joi.bool().required().label('Status deve ser true ou false')
});
