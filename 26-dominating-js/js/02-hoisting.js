//Hoisting

// Hoisting fue pensado como una manera general
// de referirse a cómo funcionan los contextos de 
// ejecución en JavaScript (específicamente las fases
// de creación y ejecución). 

obtenerCliente('Ricardo');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// Muchas personas creen que JavaScript automaticamente mueve
// todas las funciones al inicio del Script y por eso funciona bien.

// En la primera parte, JavaScript crea y registra todas las funciones, 
// es por eso que este código funciona bien

// Y puedes llamar la función antes de crearla, o crearla y después llamarla 
// y esta bien, va a funcionar.

// Con la siguiente linea si conseguimos un error 
// esto es por la sintaxis
// obtenerCliente2('Ricardo'); 

const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2('Ricardo'); // ESTO SI VA A SERVIR