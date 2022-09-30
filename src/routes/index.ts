import { Router } from 'express';

import authRouter from './authRouter';
import campaignRouter from './campaignRouter';
import leadRouter from './leadRouter';
import linkRouter from './linkRouter';
import userRouter from './userRouter';

const router = Router();

router.use(leadRouter);
router.use(userRouter);
router.use(authRouter);
router.use(campaignRouter);
router.use(linkRouter);

export default router;
