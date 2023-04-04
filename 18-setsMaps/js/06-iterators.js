// Iterators

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            const fin = ( i>= carrito.length )
            
            const valor = !fin
                              ? carrito[i++]
                              : undefined;
            return {
                fin,
                valor
            };
        }
    };
    
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const recorrerCarrrito = crearIterador(carrito);

console.log(recorrerCarrrito.siguiente());
console.log(recorrerCarrrito.siguiente());
console.log(recorrerCarrrito.siguiente());
console.log(recorrerCarrrito.siguiente());