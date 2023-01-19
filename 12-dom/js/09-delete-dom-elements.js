// Eliminar elementos del DOM

// Es muy común no? cuando borras una foto de facebook
// o un tweet se elimina automaticamente, también cuando 
// quitas elementos del carrito de compras de amazon.

// Cuando le diste me gusta a una foto por accidente y le
// quitas el like, también hay un cambio, así que sin duda
// eliminar elementos llega a ser muy común..

// Hay 2 formas de eliminar, una es eliminar un elemento
// por si mismo y la otra es eliminarlo desde el padre...

// Eliminar un elemento por si mismo:
const primerEnlace = document.querySelector('a');
console.log(primerEnlace.textContent);
primerEnlace.remove();

// Eliminar por el padre:
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);

// Otra forma es creando una variable...
const borrar = navegacion.children[1]
navegacion.removeChild(borrar);


