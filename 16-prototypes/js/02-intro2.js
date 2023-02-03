// El problema que solucionan los prototypes...

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const ricardo = new Cliente('Ricardo', 400);

console.log(ricardo);


// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}
console.log( formatearCliente(ricardo));

//////////////////////////

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const netflix = new Empresa('Netflix', 40000, 'Entretenimiento');
console.log(netflix);

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} es una empresa de ${categoria}`;
}

console.log( formatearEmpresa(netflix));


// Debido a que tengo una propiedad nueva, es dificil reutilizar esa función,
// lo cual nos llevaria digamos a muchas funciones que no sabriamos cuales utilizar 
// para los diferentes objetos, esa es una ventaja que nos dan los prototypes ya que 
// podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...