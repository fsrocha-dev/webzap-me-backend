import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import {
  campaignCreateDataSchema,
  campaignUpdateDataSchema
} from '../schemas/campaignSchema';

import * as campaignController from '../controllers/campaignController';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';

const campaignRouter = Router();

campaignRouter.use(ensureAuthMiddleware);

campaignRouter.get('/campaigns', campaignController.index);

campaignRouter.get('/campaigns/:id', campaignController.show);

campaignRouter.post(
  '/campaigns',
  validateSchemaMiddleware(campaignCreateDataSchema),
  campaignController.store
);

campaignRouter.patch(
  '/campaigns',
  validateSchemaMiddleware(campaignUpdateDataSchema),
  campaignController.update
);

export default campaignRouter;
