// Math es parte de la ventana global de JavaScript, 
// tiene una serie de operaciones que pueden ser muy útiles.

let resultado; 

// Pi
resultado = Math.PI;
console.log(resultado);

// redondeo
resultado = Math.round(2.5);
console.log(resultado);

// redondeo arriba
resultado = Math.ceil(2.2);
console.log(resultado);

// redondeo abajo
resultado = Math.floor(2.2);
console.log(resultado);

// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);

// Abssoluto
// Lo hace positivo
resultado = Math.abs(-300);
console.log(resultado);

// Potencia
// 2^3
resultado = Math.pow(2, 3);
console.log(resultado);

// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
console.log(resultado);

// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
console.log(resultado);

// Aleatorio 
resultado = Math.random();
console.log(resultado);

// Aleatorio dentro de un rango de (1 - 5):
resultado =  Math.floor( Math.random() * 5 );
console.log(resultado);