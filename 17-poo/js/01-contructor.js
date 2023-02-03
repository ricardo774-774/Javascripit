class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
};


// Inicializando un cliente
const ricardo = new Cliente('Ricardo', 1800);
console.log(ricardo);



// otra froma para declarar una clase
const Cliente2 = class {

};