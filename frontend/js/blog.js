async function cargarRecetas() {
  try {
    const res = await fetch('http://localhost:3000/api/recetas')
    const data = await res.json()
    console.log(data) // aquí ya ves las recetas
    // TODO: pintar recetas en el HTML
  } catch (err) {
    console.error('Error cargando recetas', err)
  }
}

cargarRecetas()
