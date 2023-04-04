// Creando un Set

// Un set te permite crear una lista de valores sin duplicados.
// muchas personas prefieren crear arreglos y evitar duplicados,
// pero sería más sencillo con un set... 
// En algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

// En un arreglo
let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);

// Tamaño del arreglo
/*
 Si quieres saber cuántos elementos tienes en el conjunto, 
 puedes utilizar la propiedad .size, que funciona de forma muy similar al 
 .length de los array, por ejemplo.
*/
console.log(numeros.size);

let carrito = new Set();

// añadir un elemento al conjunto. 
/*
 el método .add() permite añadir un elemento al conjunto,
 los cuales aunque se intenten duplicar los datos no nos lo permitira
*/
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');

// Comprobando que un valor existe en el set.
/*
 Este método devuelve un boolean, por lo que si existe, 
 nos devolverá true. De lo contrario, false.
*/
console.log( carrito.has('Camisa') );

// Eliminando del set
/*
 Al igual que el anterior, devuelve un . Si el borrado se realizó con éxito, 
 devolverá true, si no pudo realizarse (no existe el elemento), devolverá false.
*/
console.log( carrito.delete('Camisa') );
console.log(carrito);

// Limpiar un set
/*
 No devuelve nada. Simplemente borrará todos los elementos 
 del conjunto y lo dejará vacío.
*/
// carrito.clear();
// console.log(carrito);

// Foreach a un set
carrito.forEach(producto =>  {
    console.log(producto);
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

// Eliminar los dupliados de un arrelgo
const numerosRepetidos = [10,20,30,40,30,20,10];
const noRepetidos = new Set(numerosRepetidos);
console.log(noRepetidos);

