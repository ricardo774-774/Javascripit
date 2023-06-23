// Singleton no te va a permitir crear múltiples instancias de una clase,
// En cambio te va a retornar el objeto ya instanciado...

let instancia = null;

class Persona {
    constructor(nombre, email){
        //Si no se ha creado un objeto lo crea
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;

        //Si ya se ha creado un objeto devuelve el primero creado
        } else {
            instancia;
        }
    }
}

//Se utiliza
const persona1 = new Persona("Ricardo", "ricardo@gmail.com");
console.log(persona1);

//No se utiliza
const persona2 = new Persona("Roberto", "roberto@gmail.com");
console.log(persona2);