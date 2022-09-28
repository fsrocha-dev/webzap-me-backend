import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { userCreateDataSchema } from '../schemas/userSchema';

import * as userController from '../controllers/userControllers';

const userRouter = Router();

userRouter.get('/users/:id', userController.show);
userRouter.post(
  '/users',
  validateSchemaMiddleware(userCreateDataSchema),
  userController.store
);

export default userRouter;
