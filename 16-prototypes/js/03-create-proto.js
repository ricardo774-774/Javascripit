// Crear un prototype
// Los prototypos creados para cada objeto seran unicos
// para ellos por lo que no pueden ser accedidos por 
// objetos externos.

////////// Prototype 1 ////////////

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// saber tipo de cliente Prototype 1
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
const ricardo = new Cliente('Ricardo', 18000);
ricardo.tipoCliente();
console.log(ricardo);

// saber saldo del cliente Prototype 1
Cliente.prototype.saldoCliente = function() {
    console.log(`El saldo del cliente ${this.nombre} es ${this.saldo}`);
    return this.saldo;
}

ricardo.saldoCliente();

// retirar x cantidad de saldo Prototype 1
Cliente.prototype.RetirarSaldoCliente = function(retiro) { 
    this.saldo -= retiro;
    console.log(`Retiro exitoso, saldo actual: ${this.saldo}`);
}

ricardo.RetirarSaldoCliente(200);


////////// Prototype 2 ////////////

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

Empresa.prototype.tipoEmpresa = function() {
    console.log('Desde el nuevo proto en empresa');
}

const netflix = new Empresa('Netflix', 40000, 'Entretenimiento');
netflix.tipoEmpresa();
console.log(netflix);