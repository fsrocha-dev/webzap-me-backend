import { Links } from '@prisma/client';
import * as leadRepository from '../repositories/leadRepository';
import { badRequestError, notFoundError } from '../utils/errorUtils';
import { getLinkByRef } from './linkService';

async function createLead(data: leadRepository.TCreateLead, ref: string) {
  const link = (await getLinkByRef(ref)) as Links;

  if (!link) return notFoundError('Link não existe!');

  const lead = await leadRepository.createLead({ id_link: link.id, ...data });
  console.log(lead);
  if (!lead) return badRequestError('Não foi possível registrar o lead!');
}

export { createLead };
