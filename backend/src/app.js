const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const router = require('./routes/recetasRouter')

app.use('/api/recetas',router)



app.get('/',(request,reponse)=>{
  reponse.json({mensaje : "funciona mi api"})
})

app.listen(PORT, ()=>{
  console.log(`arranco el servidor ${PORT}`)
})