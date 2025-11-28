const RecetaModel = require('../models/recetaModel')

class RecetaController{
//funcion que trae las recetas y las responde en JSON
    static async obtenerRecetas(request, response){
        const recetas = RecetaModel.obtenerRecetas()
        response.json({
            success: true,
            data: recetas
        })

    }
}

module.exports = RecetaController