function conversorADolar (pesos){
    return  Number(pesos) / 200;
}

function conversorDeMoneda(){
    const entradaUsuario = document.getElementById("inputMonto");
    const valorEntrada = entradaUsuario.value;

    const dolaresFinales = conversorADolar(valorEntrada);

    const resultado = document.getElementById("montoFinal");
    resultado.innerText = "Su monto en dolares es de : $" + dolaresFinales;
}