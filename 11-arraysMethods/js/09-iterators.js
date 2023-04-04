// Entries

/*
Método que nos devuelve el objeto Array Iterator. 
Ten presente que este objeto también existe en otros lenguajes de programación, 
a veces bajo el nombre cursor. Este objeto contiene pares en términos de 
clave/valor para cada una de las posiciones del array. Es decir, 
existe un par dentro del objeto para cada índice. La pareja, por tanto, 
se escribe como [índice, elemento/valor].
*/

// Ejemplo1
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

for (let entry of ciudades.entries() ) {
    console.log(entry);
}


// Ejemplo2
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

for (let entry of carrito.entries() ) {
    console.log(entry);
}