const ul = document.querySelector('ul');
const button = document.querySelector('button');


let verduras = [
    {id: 1 ,producto: 'Banana', precio: 2500},
    {id: 2 ,producto: 'Manzan', precio: 2000},
    {id: 3 ,producto: 'Pepino', precio: 3000},
    {id: 4 ,producto: 'Zanahoria', precio: 500},
    {id: 5 ,producto: 'Lechuga', precio: 1800}
];

button.addEventListener('click', () => {
    for (const verdura of verduras) {
        let li = document.createElement('li'); 
        li.innerHTML = "-ID: " + verdura.id +" -Producto: " + verdura.producto +" -Precio :" + verdura.precio;
        ul.appendChild(li)
    }
})








