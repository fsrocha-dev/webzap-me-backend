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

  if (!authToken) return notFoundError('Token não encontrado!');

  const [, token] = authToken.split(' ');

  try {
    const KEY = process.env.SECRET_KEY;

    const { sub } = verify(token, KEY) as IPayload;

    req.id_user = sub;

    return next();
  } catch (error) {
    return unauthorizedError('Você não tem permissão!');
  }
}
