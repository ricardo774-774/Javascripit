// for of...

// for of solo recorre el arreglo, no crea uno nuevo

// For of se ejecuta mientras haya elementos por iterrar como puede 
// ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente of pendientes) {
    console.log(pendiente);
}

const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

for (let producto of carrito) {
    console.log(producto);
}