const express = require('express')
const { validate } = require('express-validation')

const controller = require('../../controllers/user.controller')
const { createUser, updateUser } = require('../../validations/user.validation')

const router = express.Router()

router.get('/', controller.list)

router.get('/:id', controller.get)

router.post('/', validate(createUser), controller.create)

// Update a user's details by ID
router.put('/:id', validate(updateUser), controller.update)

// Delete a user by ID
router.delete('/:id', controller.remove)

module.exports = router
