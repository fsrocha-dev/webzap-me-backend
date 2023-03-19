import { Request, Response } from 'express';
import * as service from '../services/leadService';

export async function store(req: Request, res: Response) {
  const { ref } = req.params;
  const leadInfo = req.body;

  await service.createLead(leadInfo, ref);

  res.sendStatus(200);
}
