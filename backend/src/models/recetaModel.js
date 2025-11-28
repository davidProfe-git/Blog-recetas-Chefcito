const DB = require('../config/database')


class RecetaModel{
    //listar recetas de mi base de datos
    static async obtenerRecetas(){
        const [rows] = await DB.query('SELECT * FROM recetas')
        return rows

    }

}

module.exports = RecetaModel
