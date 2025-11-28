const coneccion = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = coneccionDB