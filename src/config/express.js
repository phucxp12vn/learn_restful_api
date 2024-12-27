const express = require('express')
const cors = require('cors')
const router = require('../api/routes');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(router);

module.exports = app
