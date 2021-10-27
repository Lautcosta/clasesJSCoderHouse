localStorage.setItem('Bienvenido','hola coder');

sessionStorage.setItem('arrayss', [1,2,3]);

let lista = sessionStorage.getItem('arrayss').split(',');
console.log(lista);