const DataBase = require('mysql2')


const coneccion = mysql.createPool({
    host: ProcessingInstruction.env.HOST,
    host: ProcessingInstruction.env.USER,
    password: process.env.PASSWORD 
    database: process.env.DB_NAME
    
})