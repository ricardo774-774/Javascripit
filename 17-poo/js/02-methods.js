class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // los metodos estaticos nos permiten hacer acciones,
    // sin ser particulares de un cliente, no personalizan 
    // acciones.
    static bienvenida() {
        return 'Bienvenido, agradecemos su preferencia';
    }
};

const ricardo = new Cliente('Ricardo', 1800);
console.log(ricardo);

// llamando metodo 
console.log(ricardo.mostrarInformacion());

// llamando metodo estatico 
console.log(Cliente.bienvenida());
