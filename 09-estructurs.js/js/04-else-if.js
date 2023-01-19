// else if
let rol = 'ADMIN';

// En el else if, si se cumple alguna de las condiciones ya no se ejecutan las demas, 
// ej: si tenemos muchos else if anidados y se cumple alguno, el codigo
// ya no continuara leyendo si las demas condiciones se cumplen 

if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario solo puede editar sus registros');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...

let rol2 = 'ADMIN';

if(rol2 === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol2 === 'EDITOR' ) {
    console.log('El usuario puede editar todos los registros');
} else if(rol2 === 'AUTOR') { 
    console.log('El usuario solo puede registrar usuarios');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}