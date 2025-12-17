const express = require('express')
const RecetaController = require('../controllers/recetaController')
const router = express.Router()

router.get('/', RecetaController.obtenerRecetas)

module.exports = router
