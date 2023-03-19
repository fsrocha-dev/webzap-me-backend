import { Router } from 'express';
import * as linkController from '../controllers/linkController';

const publicRouter = Router();

publicRouter.get('/links/get/:ref', linkController.showByRef);

export default publicRouter;
