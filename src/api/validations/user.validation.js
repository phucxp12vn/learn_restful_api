const { Joi } = require('express-validation')

module.exports = {
  createUser: {
    body: Joi.object({
      name: Joi.string().required()
    })
  },

  updateUser: {
    body: Joi.object({
      name: Joi.string().required()
    }),
    params: Joi.object({
      id: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required()
    })
  }
}
