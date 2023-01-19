// Cuando utilizar this
// utilizar this cuando se quiere obtener informacion de 
// los valores que existen dentro del mismo objeto.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} cuesta ${this.precio}`);
    }
}

producto.mostrarInfo();