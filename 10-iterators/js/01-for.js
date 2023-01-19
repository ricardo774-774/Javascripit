// los For Loops tienen esa caracteristica, 
// se ejecutan hasta que el código deja de cumplir esa condición...
// For loop

// Inicializar el for
// condición
// Incremento

for(let i = 0; i <= 10; i += 2) {
    console.log(`Numero:  ${i} `);
}

for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
}

// Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}
