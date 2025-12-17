const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/recetasRouter')

// Puerto desde .env o 3000 por defecto
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())          // <-- para req.body
app.use('/api/recetas', router)

// Ruta de prueba
app.get('/', (request, response) => {
  response.json({ mensaje: 'funciona mi api' })
})

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`arranco el servidor ${PORT}`)
})
