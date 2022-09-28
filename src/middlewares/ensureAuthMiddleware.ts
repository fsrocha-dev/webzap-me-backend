import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { notFoundError, unauthorizedError } from '../utils/errorUtils';

dotenv.config();

interface IPayload {
  sub: string;
}

export async function ensureAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken)
    return res.status(404).send(notFoundError('Token não encontrado!'));

  const [, token] = authToken.split(' ');

  try {
    const KEY = process.env.SECRET_KEY;

    const { sub } = verify(token, KEY) as IPayload;

    res.locals.id_user = sub;

    return next();
  } catch (error) {
    return res.status(401).send(unauthorizedError('Você não tem permissão!'));
  }
}
