import { Joi } from 'express-validation';

export default {
  create: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },
  update: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
    params: Joi.object({
      id: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
