const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const coneccionDB = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
})

const coneccion = coneccionDB.promise()

// Inicializar la base de datos leyendo y ejecutando el SQL de `database.sql`.
async function initDatabase() {
    try {
        const sqlPath = path.join(__dirname, 'database.sql')
        if (!fs.existsSync(sqlPath)) {
            console.warn('No se encontró database.sql en', sqlPath)
            return
        }
        const sql = fs.readFileSync(sqlPath, 'utf8')
        if (sql && sql.trim().length > 0) {
            await coneccion.query(sql)
            console.log('Inicialización de base de datos ejecutada correctamente. (database.sql)')
        }
    } catch (err) {
        console.error('Error al inicializar la base de datos:', err.message || err)
    }
}

// Ejecutar inicialización en segundo plano (no bloqueante)
initDatabase()

module.exports = coneccion