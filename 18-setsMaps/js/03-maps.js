// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el 
// valor pueden ser cualquier tipo, a diferencia de un objeto 
// puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos,
// son especialmente diseñados para agregar o quitar elementos así como recorrer, 
// también cuando son muy grandes tienen mejor performance que un objeto

const usuario = new Map([[1, "ricardo"], [2, "Velez"]]);
console.log(usuario.size);

let cliente = new Map();


// Llave de tipo string
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
console.log(cliente);

// Tamaño del MAP
console.log(cliente.size);

// acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

// Contiene un valor
console.log(cliente.has('tipo'));

// Borrar
cliente.delete('nombre');
console.log(cliente.has('nombre'));

// Borrar el map
// cliente.clear();
// console.log(cliente);

// Foreach a un map
// El primer valor contiene los datos
// El segundo valor contiene las llaves
cliente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});
