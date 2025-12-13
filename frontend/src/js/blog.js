fetch('http://localhost:4000/api/recetas/')
.then(respuesta => respuesta.json())
.then(datos => {
     let contenido = document.getElementById('contenido')
 datos.data.forEach(receta => {
    contenido.innerHTML += `
    <div class="col s12 m4">
            <div class="card large">
                <div class="card-image">
                    <img src="${receta.imagen_url}">
                </div>
                <div class="card-content">
                    <span class="card-title center cursiva">${receta.titulo}</span>
                    <hr>
                    <p>${receta.ingredientes}</p>
                    <h5> ⏱️ ${receta.tiempo_preparacion} min </h5>
                </div>
                <div class="card-action">
                    <a href="receta.html">ver receta</a>
                </div>
            </div>
        </div> `
 });
     
     
        
   

}
    
   
)                                                                                    
