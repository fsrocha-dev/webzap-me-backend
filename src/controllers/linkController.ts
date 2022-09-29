import { Request, Response } from 'express';
import * as service from '../services/linkService';

export async function index(req: Request, res: Response) {
  const { id_user } = res.locals;

  const data = await service.getAllLinks(id_user);

  res.json(data);
}

export async function show(req: Request, res: Response) {
  const { id } = req.params;

  const data = await service.getLinkById(id);

  res.json(data);
}

export async function store(req: Request, res: Response) {
  const { id_user } = res.locals;

  const Link = req.body;

  const data = await service.makeLink({
    id_user: id_user,
    ...Link
  });

  res.json(data);
}

export async function update(req: Request, res: Response) {
  const { id_user } = res.locals;
  const Link = req.body;

  const data = await service.updateLink(Link, id_user);

  res.json(data);
}
