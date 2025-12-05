const DB = require('../config/database')

class RecetaModel{
    //listar recetas de mi base de datos
    static async obtenerRecetas(){
        try{
            const [rows] = await DB.query('SELECT * FROM recetas')
            return rows
        }catch (err){
            console.log(err)
        }
        
    }

}

module.exports = RecetaModel
