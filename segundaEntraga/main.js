// Array de peliculas en el Almacen

let peliculasBaseDeDatos = [
    {id: 0, titulo: "Hombres de Negro", anio: 1996},
    {id: 1, titulo: "DeadPool", anio: 2015},
    {id: 2, titulo: "Perfect Blue", anio: 1996},
    {id: 3, titulo: "Interstellar", anio: 2013},
    {id: 4, titulo: "Dune", anio: 2021},
    {id: 5, titulo: "Animal", anio: 2014}
]

// Tratamiento Mostrar Lista De Peliculas

const boton = document.getElementById("boton")
boton.addEventListener("click", evento)

function evento(){
    const lista = document.getElementById("lista");
    const ul = document.createElement("ul");
    
    peliculasBaseDeDatos.forEach((peli)=>{
        const li = document.createElement("li")
        li.innerHTML = ("ID: " + peli.id + "<br>" + "Titulo : " +  peli.titulo + "<br>" + " Año: " +  peli.anio + "<br> <br>");
        ul.appendChild(li)
    })

    lista.appendChild(ul);  
}

// Proceso seleccion de pelicula 
const boton2 = document.getElementById("idPelicula");
const input = document.getElementById("input");
const mostrarPelicula = document.getElementById("mostrarPelicula")

boton2.addEventListener("click" , (e) =>{

    let dato = parseInt(input.value);
    if (dato > -1 && dato < 6) {
        let peliculs = peliculasBaseDeDatos.find(peliss => peliss.id === dato)
        let p = document.createElement("p")
        p.innerHTML = (`ID:  ${peliculs.id} Titulo: ${peliculs.titulo} Año: ${peliculs.anio}`);
        mostrarPelicula.appendChild(p)
    } else {
        alert("Ingrese valor correcto")
    }
});






