const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Ricardo');
datos.set('profesion', 'Dessarrollador Backend');

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