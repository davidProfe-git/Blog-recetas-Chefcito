const mysql = require('mysql2')

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_recetas',
  port: 3307
})

conexion.connect(err => {
  if (err) {
    console.error('ERROR CONEXION:', err)
  } else {
    console.log('Conectado OK')
  }
  conexion.end()
})
