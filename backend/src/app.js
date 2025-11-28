const express = require('express')
const app = express()
const port = 3000

let estudiante = ["laura","miguel"]

app.get('/prueba', (req, res) => {
    res.json({mensaje: "funciona mi api"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})