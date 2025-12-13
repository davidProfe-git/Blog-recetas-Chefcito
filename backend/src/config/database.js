const mysql = require('mysql2')
require('dotenv').config()

const coneccionDB = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB, //este solo lo pone el profe
    database: process.env.DB_NAME
})

const coneccion = coneccionDB.promise()

module.exports = coneccion
