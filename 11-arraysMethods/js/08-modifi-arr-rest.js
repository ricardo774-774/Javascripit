// Un poco más sobre el rest operator...

// El rest operator es muy útil para crear un
// nuevo arreglo sin modificar el original...
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

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


// Tienes un arreglo y quieres añadir un elemento
// al final que es un string utilizarias ...
// (Recuerda esto no modifica el arreglo original como 
// si haria push y eso es muy útil en un tipo de programación
// llamada funcional)
const meses2 = [ ...meses, 'Julio' ];
console.log(meses);
console.log(meses2); 

// Al inicio en lugar de utilizar unshift, 
const meses3 = [ 'Julio', ...meses ]; 

// Añadir un objeto a un arreglo de objetos al final
const producto = {producto: 'Disco Duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);

// Al inicio en un arreglo de objetos
const carrito3 = [producto, ...carrito];
console.log(carrito3);
