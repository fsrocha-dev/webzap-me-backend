import { Users } from '@prisma/client';
import { prisma } from '../database/prismaClient';

export type ICreateUser = Omit<Users, 'id'>;

export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: { id }
  });

  const userWithoutPassword = exclude(user, 'password');

  return userWithoutPassword;
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
}: ICreateUser): Promise<Users> {
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
