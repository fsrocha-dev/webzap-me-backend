import { Users } from '@prisma/client';
import { prisma } from '../database/prismaClient';

export type ICreateUser = Omit<Users, 'id'>;

export async function getUserById(id: string) {
  return await prisma.users.findUnique({
    where: { id }
  });
}

export async function getUserByMail(email: string) {
  return await prisma.users.findFirst({
    where: {
      email
    }
  });
}
