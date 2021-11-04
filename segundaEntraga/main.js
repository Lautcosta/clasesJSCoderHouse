let boton = document.getElementById("botoncito");
boton.addEventListener('click', eventoclick)


//Declaracion de array vacio 
let peliculas = [];

//Funcion para mostrar el array con la informacion que ingresa el usuario
function eventoclick (){ 

    let pelicula ={
        ID : Date.now(),
        Titulo : document.getElementById("nombrePelicula").value,
        Año : document.getElementById("anioPelicula").value
    }

    peliculas.push(pelicula);

    // Reinicia el Form

    document.querySelector('form').reset();
    

    let peliculaFinal = document.getElementById("mostrarPelicula");
    peliculaFinal.textContent = '\n' + JSON.stringify(peliculas, '\t') ;

}

