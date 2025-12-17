const conexion = require('../config/database')

class RecetaModel {
  static async obtenerRecetas() {
    const [rows] = await conexion.query('SELECT * FROM recetas')
    return rows
  }
}

module.exports = RecetaModel
