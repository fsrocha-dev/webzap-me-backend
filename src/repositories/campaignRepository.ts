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
