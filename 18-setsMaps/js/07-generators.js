// Generador

// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function

function *crearGenerador() {
    // Yiel es nuevo también en es6 y son los valores que podemos utilziar para iterar...
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

console.log(iterador);

// next va a ir recorriendo cada yield
// ya se si se indica in .value o .done
console.log(iterador.next().value);        //1
console.log(iterador.next().done);        //false
console.log(iterador.next().value);       //6
console.log(iterador.next().value);       //true
console.log(iterador.next().value);       //undefined


// Creado nuevo generador
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

function *nuevoGenerador(carrito) {
    for( let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

let iterador2 = nuevoGenerador(carrito);

console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() );
console.log(iterador2.next() ); 