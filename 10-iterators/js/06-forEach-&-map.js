// forEach y Map, vamos a verlos 

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer un arreglo
pendientes.forEach( (pendiente) =>  console.log(pendiente) );

// Recorrer un arreglo con indice
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

// Recorrer arreglo de objetos
const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

carrito.forEach( producto =>  {
    console.log(`Agregaste ${producto.producto}`);
});

const prod = carrito.forEach( producto => producto.producto );
console.log(prod);

const prod2 = carrito.map( producto => producto.producto )
console.log(prod2);

// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, 
// el map te crea un nuevo arreglo, si solo deseas recorrer los elementos 
// utiliza el Foreach, si requieres crear un nuevo arreglo.