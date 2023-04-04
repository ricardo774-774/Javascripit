// Promise 

/*
Una Promise en JavaScript es un objeto que representa
la eventual finalización, o fallo de una operación asíncrona, 
y su valor resultante.

Una Promise puede tener uno de los siguientes estados:

Pending: estado inicial, ni cumplido (fulfilled), ni rechazado (rejected)
Fulfilled: la operación se ha completado con éxito
Rejected: La operación ha fallado
*/

const aplicarDescuento = new Promise( (resolve, reject) => { // Puede ser arrow function...
    const descuento = false;

    if(descuento) {
        resolve('Descuento Aplicado'); 
    } else {
        reject('No se pudo aplicar el descuento');
    }

});

aplicarDescuento
    .then( resultado =>  console.log(resultado) )
    .catch( error => console.log(error) );