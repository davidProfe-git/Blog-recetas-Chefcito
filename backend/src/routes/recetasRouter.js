const RecetaController = require('../controllers/recetaController')
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

ROUTER.get('/',RecetaController.obtenerRecetas)

module.exports = ROUTER