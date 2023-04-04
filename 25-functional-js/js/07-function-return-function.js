// Funcion que retorna una funcion.

const obtenerCliente = () => () =>  console.log('Hello world');

const fn = obtenerCliente();

fn();