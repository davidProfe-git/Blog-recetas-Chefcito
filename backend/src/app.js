const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const recetas = [
  {
    id: 1,
    nombre: "Pizza Especial",
    descripcion: "Masa artesanal, salsa de tomate natural, queso mozzarella, pepperoni, jamón, champiñones y aceitunas.",
    precio: "28.000 COP"
  },
  {
    id: 2,
    nombre: "Hamburguesa Especial",
    descripcion: "Carne de res a la parrilla, queso cheddar, lechuga, tomate y salsa de la casa.",
    precio: "22.000 COP"
  },
  {
    id: 3,
    nombre: "Sushi Especial",
    descripcion: "Rollos de arroz rellenos de salmón fresco, aguacate y queso crema.",
    precio: "32.000 COP"
  },
  {
    id: 4,
    nombre: "Alitas de Pollo",
    descripcion: "Alitas crujientes bañadas en salsa BBQ, acompañadas de papas a la francesa.",
    precio: "18.000 COP"
  }];

app.get("/api/recetas", (req, res) => {
  res.json(recetas);
});

app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}/api/recetas`);
});