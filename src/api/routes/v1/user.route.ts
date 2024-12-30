import express from 'express';

import * as controller from '@/api/controllers/user.controller';
import { createUserSchema, updateUserSchema } from '@/api/validations/user.validation';
import validate from '@/api/middlewares/validator';

const router = express.Router();

router.get('/', controller.list);

router.get('/:id', controller.get);

router.post('/', validate(createUserSchema), controller.create);

// Update a user's details by ID
router.put('/:id', validate(updateUserSchema), controller.update);

// Delete a user by ID
router.delete('/:id', controller.remove);

export default router;
