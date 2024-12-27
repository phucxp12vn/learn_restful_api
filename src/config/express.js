const express = require('express')
const cors = require('cors')

const routes = require('../api/routes/v1')
const error = require('../api/middlewares/error')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/v1', routes)

app.use(error.converter)

module.exports = app
