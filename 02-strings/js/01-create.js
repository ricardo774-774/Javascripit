// Los strings o cadenas de texto representan un Texto
// que se puede asignar a una variable
// existen 3 formas de crearlos que son más populares.

const producto = 'Monitor 20 Pulgadas';
const producto2 = String('Monitor 24 Pulgadas');

// Esto crea un objeto cadena
const producto3 = new String('Monitor 30 Pulgadas'); 

console.log(producto);
console.log(producto2);
console.log(producto3);

// Ejemplo con pulgadas que atiliza " como parte del string
const producto4 = 'Monitor 24\"';

console.log(producto4);