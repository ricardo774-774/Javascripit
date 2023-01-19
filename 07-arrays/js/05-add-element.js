// Supongamos que creamos un carrito de compras desde la consola,
//  más adelante lo haremos ya desde una interfaz web.
const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

// push
// Añade un elemento al carrito
carrito.push(producto);
carrito.push(producto2);

// unshift
// Añade al Inicio del carrito...
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta 
// sintaxis aún se utiliza mucho.

console.log(carrito);