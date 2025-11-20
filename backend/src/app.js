const express = require('express')
const app = express()
const port = 4000

let estudiante = ["laura","miguel"]

app.get('/pureba', (req, res) => {
    res.json({mensaje: "hola clase prog 1"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
