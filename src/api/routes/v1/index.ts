import express, { Request, Response } from 'express';

import userRoutes from './user.route';
import authRoutes from './auth.route';
import { authenticateJWT } from '@/api/middlewares/auth';

const router = express.Router();

router.get('/heal-check', (_req: Request, res: Response): void => {
  res.send('OK');
});

router.use('/users', authenticateJWT, userRoutes);
router.use('/auth', authRoutes);

export default router;
