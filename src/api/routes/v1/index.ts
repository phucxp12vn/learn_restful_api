import express, { Request, Response } from 'express';
import userRoutes from './user.route';

const router = express.Router();

router.get('/heal-check', (_req: Request, res: Response): void => {
  res.send('OK');
});

router.use('/users', userRoutes);

export default router;
