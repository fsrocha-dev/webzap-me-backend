import { Router } from 'express';

import * as leadController from '../controllers/leadController';

const leadRouter = Router();

leadRouter.post('/leads/:ref', leadController.store);

export default leadRouter;
