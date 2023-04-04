// Iteradores que se pueden 
// considerar nuevos en JavaScript

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Ricardo');
datos.set('profesion', 'Dessarrollador Backend');


// Entries Iterator
for (let entry of ciudades.entries() ) {
    console.log(entry);
}

for (let entry of ordenes.entries() ) {
    console.log(entry);
}

for (let entry of datos.entries() ) {
    console.log(entry);
}

// Values iterator
for(let value of ciudades.values()) {
    console.log(value);
}

for( let value of ordenes.values() ){
    console.log(value);
}

for( let value of datos.values() ){
    console.log(value);
}

// Keys iterator
for(let keys of ciudades.keys() ) {
    console.log(keys);
}

for( let keys of ordenes.keys()  ){
    console.log(keys);
}

for( let keys of datos.keys()  ){
    console.log(keys);
}

// Iterar en un string
const mensaje = 'Aprendiendo JavaScript';

// Forma vieja
for( let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje[i]);
}

// forma nueva
for( let letra of mensaje) {
    console.log(letra);
}