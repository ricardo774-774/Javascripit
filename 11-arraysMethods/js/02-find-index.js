// forEach, findIndex...

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

// Ejemplo con un forEach...

meses.forEach( (mes, index) => {
    if(mes === 'Abril') { 
        console.log(`Encontrado en el indice ${index}`);
    }
});



// FindIndex te dirá el indice es decir la ubicación del 
// elemento en el arreglo. Retorna -1 si no lo encuentra
const indice = meses.findIndex( mes => mes === 'Abril' );
console.log(indice);