import { infoLeads } from '@prisma/client';
import { prisma } from '../database/prismaClient';

export type TCreateLead = Omit<infoLeads, 'id' | 'created_at'>;

export async function createLead(lead: TCreateLead) {
  return await prisma.infoLeads.create({
    data: lead
  });
}
