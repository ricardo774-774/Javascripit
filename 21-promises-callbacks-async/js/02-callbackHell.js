// Listado de paises
const paises = [];

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`)
    callback();
}

function mostrarPaises() {
    console.log(paises);
}


// Los paises se muestran despues de 1 segundo
function iniciarCallbackHell() {
    setTimeout(() => {
        setTimeout(  () =>  {
            setTimeout(() => { 
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);
            nuevoPais('Francia', mostrarPaises);
        }, 3000);
        nuevoPais('Alemania', mostrarPaises); 
    }, 3000);
}

iniciarCallbackHell(); // Opcional