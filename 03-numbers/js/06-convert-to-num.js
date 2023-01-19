// Funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// ParseInt()
// Convertir de Strings a Números
console.log(parseInt(numero1));

// parseFloat()
// Convertir a número con decimales 
console.log(parseFloat(numero2)); 

// Number.isInteger()
// Revisar si un número es entero
console.log(Number.isInteger(numero4) ); 
console.log(Number.isInteger(numero3) ); 

// toString()
// Convertir numero a String
console.log(numero4.toString());