const express = require('express')
const userRoutes = require('./user.route')

const router = express.Router()

router.get('/heal-check', (req, res) => res.send('OK'))

router.use('/users', userRoutes)

module.exports = router
