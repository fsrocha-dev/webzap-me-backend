import { Links } from '@prisma/client';
import { prisma } from '../database/prismaClient';

export type TCreateLink = Omit<
  Links,
  'id' | 'created_at' | 'end_at' | 'has_preview'
>;
export type TUpdateLink = Partial<Links>;

export async function getAllLinks(id_user: string) {
  return await prisma.links.findMany({
    where: {
      id_user
    }
  });
}

export async function getLinksByCampaign(id_campaign: string) {
  return await prisma.links.findMany({
    where: {
      id_campaign
    }
  });
}

export async function getLinkById(id: string) {
  const link = await prisma.links.findUnique({
    where: { id }
  });

  return link;
}
