const express = require('express')
const app = express()

app.get('/api/recetas', (req, res) => {
  res.json('Hello World!')
})

app.listen(3000, () => {
  console.log("arranco el servidor")
})
