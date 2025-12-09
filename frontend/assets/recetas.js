// Frontend script para sincronizar y renderizar recetas desde /api/recetas
async function fetchRecetas() {
  try {
    const res = await fetch('/api/recetas')
    if (!res.ok) throw new Error('Error al obtener recetas: ' + res.status)
    const body = await res.json()
    if (!body.success) throw new Error('API error')
    return body.data
  } catch (err) {
    console.error(err)
    return []
  }
}

function crearCard(receta) {
  const div = document.createElement('div')
  div.className = 'p-4 border rounded bg-white shadow'
  div.innerHTML = `
    <h3 class="text-lg font-bold">${escapeHtml(receta.nombre)}</h3>
    <p class="text-sm text-gray-600">${escapeHtml(receta.descripcion || '')}</p>
    <details class="mt-2">
      <summary class="cursor-pointer text-sm text-primary">Ver detalles</summary>
      <h4 class="mt-2 font-semibold">Ingredientes</h4>
      <p>${escapeHtml(receta.ingredientes || '')}</p>
      <h4 class="mt-2 font-semibold">Instrucciones</h4>
      <p>${escapeHtml(receta.instrucciones || '')}</p>
    </details>
  `
  return div
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function init() {
  const container = document.getElementById('recetas-list')
  if (!container) return
  container.innerHTML = '<p>Cargando recetas...</p>'
  const recetas = await fetchRecetas()
  container.innerHTML = ''
  if (!recetas || recetas.length === 0) {
    container.innerHTML = '<p>No hay recetas disponibles.</p>'
    return
  }
  recetas.forEach(r => container.appendChild(crearCard(r)))
}

document.addEventListener('DOMContentLoaded', init)
