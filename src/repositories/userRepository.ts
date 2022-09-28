import { Users } from '@prisma/client';
import { prisma } from '../database/prismaClient';

export type ICreateUser = Omit<Users, 'id'>;

export async function getUserById(id: string) {
  return await prisma.users.findUnique({
    where: { id }
  });
}
