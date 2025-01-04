import express from 'express';

import * as controller from '@/api/controllers/user.controller';
import { createUserSchema, updateUserSchema } from '@/api/validations/user.validation';
import validate from '@/api/middlewares/validator';

const router = express.Router();

router.get('/', controller.list);

router.get('/:id', controller.get);

router.post('/', validate(createUserSchema), controller.create);

router.put('/:id', validate(updateUserSchema), controller.update);

router.delete('/:id', controller.remove);

export default router;
