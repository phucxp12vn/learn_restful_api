const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get('/status', (request, response) => {
  const status = {
    status: 'running'
  }
  response.send(status)
})

module.exports = app
