import { Router } from 'express';

import authRouter from './authRouter';
import userRouter from './userRouter';

const router = Router();

router.use(userRouter);
router.use(authRouter);

export default router;
