const recetascontrollers = require('../controllers/recetascontrollers')
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

ROUTER.get('/',recetascontrollers.obtenerRecetas)

module.exports = ROUTER
