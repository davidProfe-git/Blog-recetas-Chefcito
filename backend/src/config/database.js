const mysql = require('mysql2')
require('dotenv').config()


const coneccion = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    contraseña: process.env.CONTRASEÑA,
    database: process.env.DB_NAME
})

module.exports = coneccionDB

