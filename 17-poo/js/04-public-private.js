// Modificadores de acceso,
// básicamente solamente hay private, es decir que se pueda 
// acceder desde la clase...

// Ahora en JavaScript de nueva cuenta las classes son algo nuevo,
// funcionan sobre prototypes, pero con una forma más sencilla, 
// previamente la forma de hacerlo private era con un guion bajo, 
// eso le daba a entender al programador que esa propiedad o método
// era privado pero aún asi no era como un private real...

class Cliente {
    
    // metodo privado en ciertos casos
    #nombre;

    constructor(nombre, saldo) {
        // esto se utilizaba para espezificar a otros programadores
        // que es un metodo privado, aunque el codigo no se manejara asi.
        // this._nombre = nombre;
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        // no consigue el nombre
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        // si consigue el nombre
        return this.#nombre;
    }
};

const ricardo = new Cliente('Ricardo', 40000);
console.log(ricardo.mostrarInformacion());

ricardo.setNombre('Richard')
console.log(ricardo.getNombre());

// no nos deja acceder directamente con el nombre
// console.log(ricardo.#nombre);