const db = require('../config/database')

const MisRecetasModel = {
  async obtenerRecetas() {
    try {
      const [rows] = await db.query('SELECT id, nombre, descripcion, ingredientes, instrucciones, estrella_michelin, fecha_creacion FROM recetas_con_estrella_michelin ORDER BY fecha_creacion DESC')
      return rows
    } catch (err) {
      throw err
    }
  },

  async obtenerRecetaPorId(id) {
    try {
      const [rows] = await db.query('SELECT id, nombre, descripcion, ingredientes, instrucciones, estrella_michelin, fecha_creacion FROM recetas_con_estrella_michelin WHERE id = ?', [id])
      return rows[0] || null
    } catch (err) {
      throw err
    }
  },

  async crearReceta({ nombre, descripcion, ingredientes, instrucciones, estrella_michelin = 0 }) {
    try {
      const [result] = await db.query(
        'INSERT INTO recetas_con_estrella_michelin (nombre, descripcion, ingredientes, instrucciones, estrella_michelin) VALUES (?, ?, ?, ?, ?)',
        [nombre, descripcion, ingredientes, instrucciones, estrella_michelin]
      )
      return { id: result.insertId }
    } catch (err) {
      throw err
    }
  }
}

module.exports = MisRecetasModel
