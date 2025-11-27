const express = require('express')
const app = express()

app.get('/api/recetas',(request,reponse)=>{
  reponse.json({mensaje : "funciona mi api"})
})

app.listen(3000, ()=>{
  console.log("arranco el servidor")
})