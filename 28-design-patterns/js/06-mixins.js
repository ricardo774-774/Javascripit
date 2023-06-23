// Mixins, es una forma de agregar funciones a una clase
// una vez que ha sido creada.

// Nos ayuda a reutilizar metedos para ser uzados en diferentes clases

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    // Leer los datos sería imposible sin los mixin
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const persona = new Persona('Ricardo', 'correo@correo.com');
const cliente = new Persona('Roberto', 'correo@correo.com');

persona.mostrarInformacion();
persona.mostrarNombre();
cliente.mostrarInformacion();
cliente.mostrarNombre();