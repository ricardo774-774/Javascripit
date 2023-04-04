import { 
    Cliente,
    nombreCliente,
    ahorro,
    mostrarInformacion,
}  from './cliente.js';

import functionDefault from './cliente.js';

import Empresa from './empresa.js';


// Usando datos desde ./cliente.js
const cliente1 = new Cliente ("Riacardo", 2000);
console.log(cliente1.mostrarInformacion());
console.log(mostrarInformacion(nombreCliente, ahorro));

// Usando default desde ./cliente.js
functionDefault();


// Usando default desde ./empresa.js
const empresa1 = new Empresa (nombreCliente, ahorro, "Premium");
console.log(empresa1.mostrarInformacion());
