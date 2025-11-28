const mysql = require('mysql2')
require('dotenv').config()

const coneccionDB = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT_DB //este solo lo pone el profe
})

const coneccion = coneccionDB.promise()

module.exports = coneccion



