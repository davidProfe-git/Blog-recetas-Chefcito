alert("vamos a jugar piedra papel o tijera")
let jugador = prompt("¿cual eliges? piedra papel o tijeras")
let pc = Math.floor(Math.random()* (3 - 1 + 1) + 1)
if (pc === 1) eleccionPc = "piedra";
else if (pc === 2) eleccionPc = "papel";
else eleccionPc = "tijera";

