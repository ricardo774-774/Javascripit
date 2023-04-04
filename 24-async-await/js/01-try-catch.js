// Try Catch básicamente es intentar hacer algo,
// y si no se puede, obtener una excepción, 

// Un ejemplo sería, intentar descargar un listado de alumnos, 
// intentaremos descargarlo, si hay un error pdoremos poner un 
// error al usuario de que hubo un error al descargar...

// Si agregamos algo más de código, puedes ver que el error 
// previo hace que este código no se ejecute
// console.log(2 + 2);


// Si lo rodeamos con un try catch, nuestra función puede intentar hacer algo,
// o fallar, pero evitará que el código se ejecute

console.log('Codigo funcionando');

try {
    hola();
} catch (error) {
    console.log(error)
}

// Si utilizamos una función que no exista puedes ver 
// que tendremos un error
//hola();

try {
    console.log(2 + 2 );
    console.log('Suma exitosa');
} catch (error) {
    console.log(error)
}

console.log('Codigo funcionando');
