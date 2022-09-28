import { Router } from 'express';

import authRouter from './authRouter';
import campaignRouter from './campaignRouter';
import userRouter from './userRouter';

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(campaignRouter);

export default router;
