// Object contructor

// Nos ayuda a establecer los valores deseados que recivimos
// cuando declaramos Producto.

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Tv', 3000);
console.log(producto2);

const producto3 = new Producto('Iphone', 4000);
console.log(producto3);