// En la programación funcional también se busca tener 
// código más corto que lo que seria una función más larga...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// Ejemplo del archivo 04 
const obtenerNombres = p => p.nombre;
const resultado = carrito.map( obtenerNombres );
console.log(resultado);

// Ejemplo del archivo 03
const mayor400 = p => p.precio > 400;
const resultado2 = carrito.filter(mayor400);
console.log(resultado2);
