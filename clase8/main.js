// Funciones para calcular el perimetro y area
function perimetroCuadrado (lado) {
    return lado * 4
};

function areaCuadrado (lado){
   return lado * lado;
}


// Dom 
function calcPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}