const express = require('express')
const app = express()

const logger = require('./middleware/logger')

app.use(logger)

const arbitrosRouter = require('./routers/arbitros')
app.use('/arbitros', arbitrosRouter)

const estadiosRouter = require('./routers/estadios')
app.use('/estadios', estadiosRouter)

const jogosRouter = require('./routers/jogos')
app.use('/jogos', jogosRouter)

app.get('/', (req,res)=>{
  res.json({ ok:true })
})

module.exports = app
