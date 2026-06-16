const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

const logger = require('./middleware/logger')
app.use(logger)
module.exports = app
