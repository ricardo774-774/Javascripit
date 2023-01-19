// Concatenar o unir 2 textos o variables:

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Concactenar un string
console.log(producto.concat('En Descuento'));
// Concactenar una variable
console.log(producto.concat(precio)); 

// Otras formas de concatenar:
console.log(producto + precio); 
console.log(producto +  "Con un precio de " +precio); 
console.log("El Producto" + producto +  " tiene un precio de " + precio); 
console.log("El Producto" , producto ,  " tiene un precio de ",  precio); 

// ES6 trajo consigo una mejor forma de concatenar variables que 
// es con algo llamado Template String o template literal
console.log(`El Producto ${producto} tiene un precio de ${precio}`);