const RecetaModel = require('../models/misrecetasmodels')

class RecetaController {
    // devuelve todas las recetas en JSON
    static async obtenerRecetas(req, res) {
        try {
            const recetas = await RecetaModel.obtenerRecetas()
            res.json({ success: true, data: recetas })
        } catch (err) {
            res.status(500).json({ success: false, error: err.message || err })
        }
    }

    // devuelve una receta por id
    static async obtenerRecetaPorId(req, res) {
        try {
            const id = req.params.id
            const receta = await RecetaModel.obtenerRecetaPorId(id)
            if (!receta) return res.status(404).json({ success: false, message: 'Receta no encontrada' })
            res.json({ success: true, data: receta })
        } catch (err) {
            res.status(500).json({ success: false, error: err.message || err })
        }
    }

    // crear nueva receta
    static async crearReceta(req, res) {
        try {
            const { nombre, descripcion, ingredientes, instrucciones, estrella_michelin } = req.body
            if (!nombre) return res.status(400).json({ success: false, message: 'El campo nombre es requerido' })
            const result = await RecetaModel.crearReceta({ nombre, descripcion, ingredientes, instrucciones, estrella_michelin })
            res.status(201).json({ success: true, data: { id: result.id } })
        } catch (err) {
            res.status(500).json({ success: false, error: err.message || err })
        }
    }
}

module.exports = RecetaController