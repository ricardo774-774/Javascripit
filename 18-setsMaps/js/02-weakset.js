// Los Set son una estructura de datos poco restrictiva,
// ya que puedes insertar cualquier tipo de elemento. 
// Los WeakSet no permiten insertar datos primitivos solo objetos.
// No tienen la propiedad size.
// Tampoco son iterables ni tienen keys, values entries etc.

const cliente = {
    nombre: 'Ricardo',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

var ws = new WeakSet();

// añadiendo obetos
ws.add(cliente); 
ws.add(cliente2);

// consultando los objetos
console.log( ws.has(cliente) ); 
console.log( ws.has(cliente2));   

// eliminando objeto cliente
console.log( ws.delete(cliente));
console.log( ws.has(cliente) ); 