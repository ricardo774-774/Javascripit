// Veamos como acceder, añadir y eliminar propiedades de un objeto:

const producto = {
    nombre: "Monitor 20 pulgadas", 
    precio: 30,
    disponible: true,
}


console.log(producto);

// Supongamos que deseamos acceder al nombre, en los objetos de javascript 
// existe algo llamado la sintaxis de punto

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);


// Añadir propiedades nuevas a un objeto...
producto.imagen = "image.jpg";
console.log(producto);

// Finalmente para eliminar una propiedad se utiliza delete
delete producto.nombre;
console.log(producto);