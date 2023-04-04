// 2 O mas Async await...

//Es muy común tener 2 Async Await,  es probable que 
//quieras en una misma función descargar los últimos 100
//clientes y también los últimos 50 pedidos..

function descargarNuevosClientes() {
    return new Promise( (resolve) => {
        console.log('Descargando clientes');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    })
}

function descargarNuevosPedidos() {
    return new Promise( (resolve) => {
        console.log('Descargando pedidos');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    })
}

const app = async() => {
    try {
        //este codigo es para correr ambas funciones al mismo tiempo
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();