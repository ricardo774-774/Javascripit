// Veamos como añadir un elemento a un arreglo utilizando
// el Spread Operator o Rest Operator...

const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

const producto4 =  { 
    nombre: 'Tv', 
    precio: 54
}

// Para añadir producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto];
    resultado = [...resultado, producto2];
    resultado = [...resultado, producto3];

console.log(resultado);

 // Para añadir al inicio...
 resultado = [producto4, ...resultado];

 console.log(resultado);

// Esta forma se conoce más como Declarativa mientras que la del 
// archivo anterior es más imperativa, ambas son muy utilizadas en 
// programación JavaScript
