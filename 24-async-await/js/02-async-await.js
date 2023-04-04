//async-await

/*
  Las palabras clave async y await, implementadas a partir de ES2017, 
  son una sintaxis que simplifica la programación asíncrona, 
  facilitando el flujo de escritura y lectura de código; por lo que es 
  posible escribir código que funcione de forma asíncrona, pero que se lea y 
  estructure de forma síncrona. Async/await funciona con código basado en Promises, 
  pero oculta las promesas para que la lectura sea más fluida y sencilla de entender.
*/

function descargarClientes() {

    return new Promise((resolve,reject) => {
        // testear con true para el error
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de cleintes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

// En este caso await espera a que resuelva el promise descargarClientes()
async function ejecutar() {
    try {
        console.log('Ejecucion 1');
        const respuesta = await descargarClientes();     
        console.log(respuesta);
        console.log('Ejecucion 2');
    } catch (err) {
        console.log(err);
    }
}

ejecutar();