import { Request, Response } from 'express';
import * as service from '../services/userService';

export async function store(req: Request, res: Response) {
  const user = req.body;

  const data = await service.makeUser(user);

  res.json(data);
}
