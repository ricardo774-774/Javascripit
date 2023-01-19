// Length - IndexOf - Includes

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Length
// Conocer el tamaño de una cadena, length es de 
// los muy pocos métodos que no usan () y es más que nada 
// porque no es un método como tal sino una propiedad.
console.log(producto.length);

// IndexOf
// Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf("20"));
// -1 Significa que no lo pudo encontrar
console.log(producto.indexOf('Tablet'));

// Includes
// Conocer si un texto existe (true)
console.log(producto.includes('Monitor')); 
// Conocer si un texto no existe (false)
console.log(producto.includes('monitor')); 