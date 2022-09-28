import { Campaigns } from '@prisma/client';
import { prisma } from '../database/prismaClient';

export type TCreateCampaign = Omit<Campaigns, 'id' | 'created_at' | 'end_at'>;
export type TUpdateCampaign = Partial<Campaigns>;

export async function getAllCampaigns(id_user: string) {
  return await prisma.campaigns.findMany({
    where: {
      id_user
    }
  });
}

export async function getCampaignById(id: string) {
  const campaign = await prisma.campaigns.findUnique({
    where: { id }
  });

  return campaign;
}

export async function createCampaign(campaign: TCreateCampaign) {
  return await prisma.campaigns.create({
    data: campaign
  });
}
