let producto = 0;
let cantidadProducto = 0;
let precio = 0;


// CLASE
class Pedidos {
  constructor(producto, precio, cantidad) {
    this.producto = producto,
    this.precio = precio,
    this.cantidad = cantidad,
    this.subTotal = 0,
    this.Total = 0
  }

  calcularSubTotal (){
    this.subTotal = this.precio * this.cantidad;
  }

  Iva(){
    return this.subTotal * 0.21;
  }
  
  calcularTotal (){
    this.Total = this.subtotal + this.Iva();
  }

}
 
function pedidoProducto () {
  while (!producto || producto == 0 || producto > 4) { 
    producto = parseInt(prompt("Que producto desea comprar? \n 1: Lechuga($100)\n 2:Tomate($150)\n 3:Zanahoria($100) \n 4:Palta($300)"))
  }

  switch(producto){
      case 1:
        producto = "Lechuga";
        precio = 100;
      break;
      case 2:
        producto = "Tomate";
        precio = 150;
      break;
      case 3:
        producto = "Zanahoria";
        precio = 100;
      break;
      case 4:
        producto = "Palta";
        precio = 300;
      break;
  }

  while (!cantidadProducto || cantidadProducto == 0) {
    cantidadProducto = parseInt(prompt("Producto elegido: " + producto + "\n Introduzca la cantidad(en numeros)"));
  }

  return new Pedidos(producto,precio,cantidadProducto);
}

alert("Bienvenido")

const pedidoe = pedidoProducto();

pedidoe.calcularSubTotal();
pedidoe.Iva();
pedidoe.calcularTotal();

alert("Detalle del pedido \n -" + pedidoe.producto + " x" + pedidoe.cantidad + " = $" + pedidoe.precio * pedidoe.cantidad + 
"\n" +  "-IVA 21% = $ " + pedidoe.Iva() + 
"\n"  + "-Total = $" + pedidoe.Total)