// Operador && 
// El Operador && Revisa que se cumplan ambas condiciones...

// Vamos a crear un par de variables...

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Tu Pedido se hizo con éxito...');
    
} else {
    console.log('hubo un error con tu pago.')
}

// Ahora si quieres darle mensajes de error 
// más detallados a tus usuarios puedes revisar o negar una condición

if (usuario && puedePagar) {
    console.log('Tu Pedido se hizo con éxito...');
} else if (!usuario) {
    console.log('Inicia sesión para realizar el pedido')
} else if(!puedePagar) {
    console.log('Fondos Insuficientes')
} else {
    console.log('hubo un error con tu pago.')
}
