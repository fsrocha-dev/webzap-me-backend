import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { linkCreateDataSchema } from '../schemas/linkSchema';

import * as linkController from '../controllers/linkController';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';

const linkRouter = Router();

linkRouter.use(ensureAuthMiddleware);

linkRouter.get('/links', linkController.index);

linkRouter.get('/links/:id', linkController.show);

linkRouter.post(
  '/links',
  validateSchemaMiddleware(linkCreateDataSchema),
  linkController.store
);

export default linkRouter;
