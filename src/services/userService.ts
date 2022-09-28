import { hash } from 'bcrypt';
import * as userRepository from '../repositories/userRepository';
import { ICreateUser } from '../repositories/userRepository';
import { conflictError, notFoundError } from '../utils/errorUtils';

async function getUserById(id: string) {
  const user = await userRepository.getUserById(id);
  if (!user) return notFoundError('Usuário não encontrado!');

  return user;
}

async function makeUser(user: ICreateUser) {
  const userExist = await userRepository.getUserByMail(user.email);

  if (userExist) return conflictError('Favor, tente usar outro e-mail!');

  const hashPassword = await hash(user.password, 10);

  const { password, ...createdUser } = await userRepository.createUser({
    ...user,
    password: hashPassword
  });

  return createdUser;
}

export { getUserById, makeUser };
