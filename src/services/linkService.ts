import * as linkRepository from '../repositories/linkRepository';
import { notFoundError } from '../utils/errorUtils';

async function getAllLinks(id_user: string) {
  const links = await linkRepository.getAllLinks(id_user);

  if (!links) return notFoundError('Não existem links!');

  return links;
}

async function getLinkById(id: string) {
  const link = await linkRepository.getLinkById(id);

  if (!link) return notFoundError('Link não encontrado!');

  return link;
}

async function getLinkByRef(ref: string) {
  const link = await linkRepository.getLinkByRef(ref);

  if (!link) return notFoundError('Link não encontrado!');

  return link;
}

async function getLinksByCampaign(id_campaign: string) {
  const links = await linkRepository.getLinksByCampaign(id_campaign);

  if (!links) return notFoundError('Link não encontrado!');

  return links;
}

async function makeLink(data: linkRepository.TCreateLink) {
  const refLinkGenerator = Math.random().toString(36).substring(2, 8);

  const createdLink = await linkRepository.createLink({
    ref: refLinkGenerator,
    ...data
  });

  return createdLink;
}

async function updateLink(data: linkRepository.TUpdateLink, id: string) {
  const link = await linkRepository.updateLink(data, id);

  if (!link) return notFoundError('Não foi possível atualizar o link!');

  return link;
}

export {
  getAllLinks,
  getLinkById,
  getLinkByRef,
  getLinksByCampaign,
  makeLink,
  updateLink
};
