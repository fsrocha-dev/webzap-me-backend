import * as campaignRepository from '../repositories/campaignRepository';
import { TCreateCampaign } from '../repositories/campaignRepository';
import { conflictError, notFoundError } from '../utils/errorUtils';

async function getAllCampaigns(id_user: string) {
  const campaigns = await campaignRepository.getAllCampaigns(id_user);

  if (!campaigns) return notFoundError('Não existem campanhas registradas!');

  return campaigns;
}

async function getCampaignById(id: string) {
  const campaign = await campaignRepository.getCampaignById(id);

  if (!campaign) return notFoundError('Campanha não encontrada!');

  return campaign;
}

async function makeCampaign(data: TCreateCampaign) {
  const createdCampaign = await campaignRepository.createCampaign(data);

  return createdCampaign;
}

async function updateCampaign(
  data: campaignRepository.TUpdateCampaign,
  id: string
) {
  const campaigns = await campaignRepository.updateCampaign(data, id);

  if (!campaigns)
    return notFoundError('Não foi possível atualizar a campanha!');

  return campaigns;
}

export { getAllCampaigns, getCampaignById, makeCampaign, updateCampaign };
