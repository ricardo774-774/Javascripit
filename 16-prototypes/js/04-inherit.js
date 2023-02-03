// Heredar Prototypes

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function() {
    let tipoCliente;

    if ( this.saldo > 10000 ) {
        tipoCliente = 'Cliente premum';
    } else if ( this.saldo > 0 ) {
        tipoCliente = 'Cliente regular';
    } else if ( this.saldo < 0 ) {
        tipoCliente = 'Cliente con deuda';
    }
    console.log(tipoCliente);
    return tipoCliente;
}

Cliente.prototype.saldoCliente = function() {
    console.log(`El saldo del cliente ${this.nombre} es ${this.saldo}`);
    return this.saldo;
}

Cliente.prototype.RetirarSaldoCliente = function(retiro) { 
    this.saldo -= retiro;
    console.log(`Retiro exitoso, saldo actual: ${this.saldo}`);
}

///////////////////////////////////////////

function Persona(nombre,saldo, telefono) {
    // heredando atributos de cliente a apersona
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Heredar la función ( Antes de Instanciarlo )
// para que al crear un nuevo objeto persona
// este pueda contar con todas las funciones de cliente 
Persona.prototype = Object.create ( Cliente.prototype );
Persona.prototype.constructor = Cliente;

const ricardo = new Persona('Ricardo',18000, 3334861679);
console.log(ricardo);
console.log(ricardo.saldoCliente());


// Este metodo es nuevo y solo disponible en 
// Persona 
Persona.prototype.mostrarTelefono = function() {
    console.log( `El telefono del cliente en persona es ${this.telefono}`);
    return this.telefono;
}

ricardo.mostrarTelefono();