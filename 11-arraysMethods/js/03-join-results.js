// Array Method .reduce

// Si buscas la definición de que es una función reduce 
// te dirá que es una función reductora...

// Pero basicamente es tomar una gran cantidad de datos y 
// entregar un resultado..

// Supongamos que tenemos nuestro carrito de compras
// y queremos decirle al usuario cuanto es el total a pagar...

const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300},
    { producto: 'Audifonos', precio: 200},
    { producto: 'Teclado', precio: 50},
    { producto: 'Celular', precio: 500},
    { producto: 'Bocinas', precio: 300},
    { producto: 'Laptop', precio: 800},
];

// Con un foreach lo podrías hacer asi...

let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total);

// Tenerlo todo en una sola linea con un .reduce          
                       // valor total, valor actual                 // 0 es valor inicial
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); 
console.log( resultado );