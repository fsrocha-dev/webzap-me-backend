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

export async function createUser({
  name,
  last_name,
  commercial_name,
  email,
  password
}: ICreateUser) {
  return await prisma.users.create({
    data: { name, last_name, commercial_name, email, password }
  });
}

function exclude<Users, Key extends keyof Users>(
  user: Users,
  ...keys: Key[]
): Omit<Users, Key> {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
