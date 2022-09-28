import { Request, Response } from 'express';
import * as service from '../services/campaignService';

export async function index(req: Request, res: Response) {
  const { id_user } = res.locals;

  const data = await service.getAllCampaigns(id_user);

  res.json(data);
}

export async function show(req: Request, res: Response) {
  const { id } = req.params;

  const data = await service.getCampaignById(id);

  res.json(data);
}

export async function store(req: Request, res: Response) {
  const { id_user } = res.locals;

  const campaign = req.body;

  const data = await service.makeCampaign({
    id_user: id_user,
    ...campaign
  });

  res.json(data);
}

export async function update(req: Request, res: Response) {
  const { id_user } = res.locals;
  const campaign = req.body;

  const data = await service.updateCampaign(campaign, id_user);

  res.json(data);
}
