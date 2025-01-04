import express from 'express';

import validate from '@/api/middlewares/validator';
import { loginSchema } from '@/api/validations/auth.validation';
import { login } from '@/api/controllers/auth.controller';

const router = express.Router();

router.post('/login', validate(loginSchema), login);

export default router;
