const DataBase = require('mysql2')
require('dotenv').config()

const coneccion = DataBase.createPool({
    host: ProcessingInstruction.env.HOST,
    host: ProcessingInstruction.env.USER,
    password: process.env.PASSWORD, 
    database: process.env.DB_NAME
    
}) 
const conection = coneccion.promise()

module.exports = conection 
