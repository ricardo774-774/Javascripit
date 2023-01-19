// .replace, .slice, .substring y .charAt

// Replace 
// Reemplaza el primer valor por el segundo 
// exactamente en la posicion original del primero
const producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24"));
console.log(producto.replace('Pulgadas', '"'));

// Slice
// Te va a permitir extraer una parte de una cadena
// Iniciar en 0 y cortar hasta 10
console.log( producto.slice(0, 10)); 
// Cortar desde el 8 hasta el fin
console.log(producto.slice(8));
// cortar desde 2 hasta el 10
console.log(producto.slice(2, 10)); 
// Si el primer número es mayor, no va a mostrar nada
console.log(producto.slice(5,2)); 

// Substring
console.log( producto.substring(0, 10) );
// Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)
console.log( producto.substring(2, 1) );  
const nombre = "Juan";
console.log(nombre.substring(0,1));

// charAt
// Muestra la letra que se ecuentre en la pocision indecada
console.log(nombre.charAt(0));
console.log(nombre.charAt(3));