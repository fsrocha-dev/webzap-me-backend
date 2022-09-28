import { Request, Response } from 'express';
import * as service from '../services/authService';

export async function authenticate(req: Request, res: Response) {
  const user = req.body;

  const data = await service.authUser(user);

  res.json(data);
}
