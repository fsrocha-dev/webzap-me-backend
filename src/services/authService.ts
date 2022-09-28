import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import { getUserByMail } from '../repositories/userRepository';
import { unauthorizedError } from '../utils/errorUtils';

dotenv.config();

interface IAuthenticate {
  email: string;
  password: string;
}

export async function authUser({ email, password }: IAuthenticate) {
  const user = await getUserByMail(email);

  if (!user) return unauthorizedError('Email e/ou senha inválidos!');

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) return unauthorizedError('Email e/ou senha inválidos!');

  const KEY = process.env.SECRET_KEY;

  const token = sign({ name: user.name }, KEY, {
    subject: user.id,
    expiresIn: '1d'
  });

  return token;
}
