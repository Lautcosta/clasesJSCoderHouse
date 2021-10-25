console.log('Bienvenido a nuestra verduleria online \nPorfavor ingrese un monto y le mostraremos productos que cuesten lo mismo o menos')


let entrada = parseInt(prompt("Ingrese un precio"));

let verduras = [
    {producto: 'Banana', precio: 2500},
    {producto: 'Manzan', precio: 2000},
    {producto: 'Pepino', precio: 3000},
    {producto: 'Zanahoria', precio: 500},
    {producto: 'Lechuga', precio: 1800}
];

let verdurasFiltradas = verduras.filter(function(verdu){
    return verdu.precio <= (entrada);
});

console.log('Los productos con un precio igual o menor son: ');
console.log( verdurasFiltradas); 
