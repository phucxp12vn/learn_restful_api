import { body, param } from 'express-validator';

export const createUserSchema = [
  body('name').isString().trim().notEmpty().withMessage('Name is required and must not be empty'),
];

export const updateUserSchema = [
  body('name').isString().trim().notEmpty().withMessage('Name is required and must not be empty'),
  param('id').notEmpty().isInt().withMessage('User ID must be an integer'),
];
