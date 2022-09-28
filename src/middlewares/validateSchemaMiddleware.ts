import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      // Entrei dentro do objeto o máximo possível, para retornar somente a mensagem de erro do JOI.
      // Preferi optar por mostrar uma mensagem de cada vez dos erros de validação que acontecem via JOI
      return res.status(422).send(validation.error.details[0].context.label);
    }

    next();
  };
}
