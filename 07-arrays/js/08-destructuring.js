// Array Destructuring - Al igual que los objetos algunas
// veces quieres crear la variable y el valor del arreglo, 
// veamos algunos ejemplos:

const numeros = [10,20,30,40,50];

const [primero, , segundo, tercero ] = numeros;


console.log(numeros);

console.log(primero);
console.log(segundo);
console.log(tercero);

// Si quieres saltarte un valor, pon una coma....
const [primer, , tercer, , quint] = numeros;

console.log(primer);
console.log(tercer);
console.log(quint);

// ahora, como extraes todos los otros valores, digamos 
// que solo quieres crear la primer variable y todos los demas 
// valores se quedan en terecero2, menos el primero.

const [ primero2, ...tercero2 ] = numeros;
console.log(tercero2);