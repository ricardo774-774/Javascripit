class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido, agradecemos su preferencia';
    }
};


// Heredando datos de clinete a empresa
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        // en super se ingresan los datos que resivira la clase Cliente
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // al repetir nombres de las clases estas al estar
    // heredadas se sobre escribiran solo para la clase hijo 
    static bienvenida() {
        return 'Bienvenido, agradecemos su confianza';
    }
};


const ricardo = new Cliente('Ricardo', 1800);
console.log(Cliente.bienvenida());
const netflix = new Empresa('Netflix', 120000);
console.log(netflix.mostrarInformacion());
console.log(Empresa.bienvenida());