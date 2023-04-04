// Async Await con Function Declaration

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
const ejecutar = async() => {
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