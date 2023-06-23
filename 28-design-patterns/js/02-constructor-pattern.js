// Constructor Pattern es cuando utilizamos una clase base 

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona("Ricardo", "ricardo@gmail.com");
console.log(persona);

const cliente = new Cliente("Ricardo", "ricardo@gmail.com", "Amazon");
console.log(cliente);