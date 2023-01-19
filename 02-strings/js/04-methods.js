// trimStart - trimEnd - trim

const producto = '        Monitor 20 Pulgadas      '; 

console.log(producto);
console.log(producto.length);

// trimStart
// Elimina todos los espacios en blancos del inicio
console.log(producto.trimStart()); 

// trimEnd
// Elimina todos los espacios en blancos del final
console.log(producto.trimEnd()); 

// Cortar en ambas direcciones
// Los métodos en javaScript se pueden colocarse uno junto al otro
console.log(producto.trimStart().trimEnd() ); 

// trim
// Un método (que ya tiene rato ) es trim que hace lo mismo
console.log(producto.trim());
console.log(producto.trim().length);