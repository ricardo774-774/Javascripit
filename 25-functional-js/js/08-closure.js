// Closure

// En JavaScript los Closures son creados cada que una función se crea

// Closure es una forma de acceder a una función o valor, desde el exterior...


const obtenerCliente = () =>  {
    const nombre = "Ricardo";
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}
  
const cliente = obtenerCliente();
cliente(); 