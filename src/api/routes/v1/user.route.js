const express = require('express')
const controller = require('../../controllers/user.controller')

const router = express.Router()

router.get('/', controller.list)

router.get('/:id', controller.get)

router.post('/', controller.create)

// Update a user's details by ID
router.put('/:id', controller.update)

// Delete a user by ID
router.delete('/:id', controller.remove)

module.exports = router
