const RecetaModel = require('../models/recetaModel')

class RecetaController {
  static async obtenerRecetas(request, response) {
    try {
      const recetas = await RecetaModel.obtenerRecetas()
      response.json({
        success: true,
        data: recetas
      })
    } catch (error) {
      console.error(error)
      response.status(500).json({
        success: false,
        message: 'Error al obtener recetas'
      })
    }
  }
}

module.exports = RecetaController
