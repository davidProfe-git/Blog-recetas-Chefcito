const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

// Config base (sin especificar database) para poder ejecutar CREATE DATABASE
const baseConfig = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    multipleStatements: true
}

// Inicializa la base de datos ejecutando el SQL y devuelve una promesa con el pool final
async function initPool() {
    // 1) crear pool temporal sin database para ejecutar CREATE DATABASE y USE
    const tempPool = mysql.createPool(baseConfig).promise()
    try {
        const sqlPath = path.join(__dirname, 'database.sql')
        if (fs.existsSync(sqlPath)) {
            const sql = fs.readFileSync(sqlPath, 'utf8')
            if (sql && sql.trim().length > 0) {
                await tempPool.query(sql)
                console.log('Inicialización de base de datos ejecutada correctamente. (database.sql)')
            }
        } else {
            console.warn('No se encontró database.sql en', sqlPath)
        }
    } catch (err) {
        console.error('Error al ejecutar database.sql:', err.message || err)
    } finally {
        try { await tempPool.end() } catch (e) { /* ignore */ }
    }

    // 2) crear pool final que sí use la base de datos
    const finalConfig = Object.assign({}, baseConfig, { database: process.env.DB_NAME || 'ArizaDelicias' })
    const pool = mysql.createPool(finalConfig).promise()
    return pool
}

// poolPromise resuelve cuando la conexión final está lista
const poolPromise = initPool()

// Exportar un helper `query` que espera al pool
module.exports = {
    query: async function () {
        const pool = await poolPromise
        return pool.query.apply(pool, arguments)
    },
    getPool: async function () { return await poolPromise }
}