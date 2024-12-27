import express, { RequestHandler } from 'express';
import { validate } from 'express-validation';

import * as controller from '@/api/controllers/user.controller';
import userValidation from '@/api/validations/user.validation';

const router = express.Router();

router.get('/', controller.list);

router.get('/:id', controller.get);

router.post('/', validate(userValidation.create) as unknown as RequestHandler, controller.create);

// Update a user's details by ID
router.put('/:id', validate(userValidation.update) as unknown as RequestHandler, controller.update);

// Delete a user by ID
router.delete('/:id', controller.remove);

export default router;
