require('dotenv').config()

const express = require('express')
const cors = require('cors')

const logger =
    require('./middleware/logger')

const errorHandler =
    require('./middleware/errorHandler')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/selecoes',
    require('./routers/selecoes'))

app.use('/arbitros',
    require('./routers/arbitros'))

app.use('/estadios',
    require('./routers/estadios'))

app.use('/jogos',
    require('./routers/jogos'))

app.use('/avaliacoes',
    require('./routers/avaliacoes'))

app.use(errorHandler)

module.exports = app