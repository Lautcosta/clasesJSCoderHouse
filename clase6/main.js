const Numeros = [];
let cantidad = 5;

alert('Bienvenido! \nEste algoritmo le solicitara que ingrese 5 numeros y luego le mostrara los menores a 5');

do{
    let entrada = parseInt(prompt("Ingrese un numero")); 
    Numeros.push(entrada);
} while (Numeros.length != cantidad)

let entrada2 = Numeros.filter(function(numerito){
    return numerito < 3;
})

alert('Los numeros que usted ingreso son: '+ '\n' + Numeros.join('\n')); 
alert('Los numeros menores a 5 son: ' + '\n' +entrada2.join('\n')); 