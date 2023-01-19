// forEach, includes, some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

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


// Saber si el arreglo de meses, 
// tiene el mes de Febrero, hacerlo con un foreach...

meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    }
})

// O también podrías utilizar el Array Method de .includes
// retorna true or false 

const resultado = meses.includes('Diciembre'); 
console.log(resultado);


// En el caso de un arreglo de objetos includes no es la 
// mejor opción, podrías utilizar uno llamado .some
// retorna true or false 
const existe = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe);

// Some en un arreglo tradicional...
// retorna true or false 
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);