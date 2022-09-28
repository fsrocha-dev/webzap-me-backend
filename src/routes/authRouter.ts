import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { authDataSchema } from './../schemas/authSchema';

import * as authController from '../controllers/authController';

const authRouter = Router();

authRouter.post(
  '/auth/login',
  validateSchemaMiddleware(authDataSchema),
  authController.authenticate
);

export default authRouter;
