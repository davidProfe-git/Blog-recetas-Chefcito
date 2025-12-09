// Sincroniza recetas desde la API y las renderiza en la página
async function cargarRecetasHome() {
    try {
        const res = await fetch('/api/recetas')
        if (!res.ok) throw new Error('Error al obtener recetas: ' + res.status)
        const body = await res.json()
        const recetas = (body && body.data) ? body.data : []

        const cont = document.getElementById('top-recetas')
        if (!cont) return

        // Limpiar contenido estático y renderizar tarjetas
        cont.innerHTML = ''
        recetas.slice(0,5).forEach(receta => {
            const card = document.createElement('div')
            card.className = 'flex items-stretch p-4 gap-6 flex-shrink-0 w-full'
            card.innerHTML = `
                <div class="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-lg min-w-80 snap-center transition-transform duration-300 hover:scale-105">
                    <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl" style="background-image: url('${escapeAttr(receta.imagen_url || '')}')"></div>
                    <div class="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                        <div>
                            <p class="text-lg font-bold font-display text-text-light dark:text-text-dark">${escapeHtml(receta.nombre)}</p>
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">${escapeHtml(receta.descripcion || '')}</p>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex flex-wrap gap-2">
                                <div class="flex items-center justify-center gap-1">
                                    <span class="material-symbols-outlined text-red-500 text-lg">favorite</span>
                                    <p class="text-gray-600 dark:text-gray-400 text-xs font-bold">—</p>
                                </div>
                            </div>
                            <a class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary hover:text-white" href="recetas.html">
                                <span class="truncate">Ver Receta</span>
                            </a>
                        </div>
                    </div>
                </div>
            `
            cont.appendChild(card)
        })
    } catch (err) {
        console.error('Error cargando recetas en home:', err)
    }
}

function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

function escapeAttr(text) {
    return String(text || '').replace(/"/g, '%22')
}

document.addEventListener('DOMContentLoaded', cargarRecetasHome)
