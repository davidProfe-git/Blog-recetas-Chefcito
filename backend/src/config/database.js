const mysql = require('mysql2')
require('dotenv').config()

const conexion = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_recetas',
  port: 3307
})

const conexionPromise = conexion.promise()

module.exports = conexionPromise
