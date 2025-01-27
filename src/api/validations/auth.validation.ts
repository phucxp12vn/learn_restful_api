import { body } from 'express-validator';

export const loginSchema = [
  body('username')
    .notEmpty()
    .isString()
    .trim()
    .withMessage('Name is required and must not be empty'),
  body('password').isString().notEmpty().withMessage('Password is required and must not be empty'),
];
