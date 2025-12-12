const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const router = require('./routes/misrecetasRoutes')

app.use(cors())
app.use('/api/recetas',router)



app.get('/',(request,reponse)=>{
  reponse.json({mensaje : "funciona mi api"})
})

app.listen(PORT, ()=>{
  console.log(`arranco el servidor ${PORT}`)
})