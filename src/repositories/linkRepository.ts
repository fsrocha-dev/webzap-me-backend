import { infoLeads, Links } from '@prisma/client';
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
    },
    select: {
      ref: true,
      phone_number: true,
      custom_message: true,
      is_active: true,
      campaign: {
        select: {
          id: true,
          name: true
        }
      },
      _count: {
        select: { infoLeads: true }
      }
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

export async function createLink(link: TCreateLink) {
  return await prisma.links.create({
    data: link
  });
}

export async function updateLink(link: TUpdateLink, id: string) {
  return await prisma.links.update({
    where: { id },
    data: link
  });
}
