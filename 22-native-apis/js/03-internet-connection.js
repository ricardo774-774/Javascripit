// Detectar si tenemos o no RED...

// apagar y encedender wifi para testear

const enLinea = navigator.onLine;

console.log("En linea: ",enLinea);

window.addEventListener('online', updateNetState);
window.addEventListener('offline', updateNetState);

function updateNetState() {
    if(navigator.onLine ) {
        console.log('Si estas conectado')
    } else {
        console.log('Parece que has perdido tu conexión...')
    }
}

