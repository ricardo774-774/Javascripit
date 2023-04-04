// Para que un export funcione primero
// hay que abrir el index.js y declararlo con type="module"

export const nombreCliente =  'Ricardo Velez'; 

export const ahorro = 5000;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function funcion() {
    console.log('Función por default')
}