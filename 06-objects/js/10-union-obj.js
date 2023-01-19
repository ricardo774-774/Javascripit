// Spread Operator o Rest Operator

// Veamos otro metodo de como unir 2 objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}


// La otra forma de hacerlo: 

const resultado = { ...producto, ...medidas};

console.log(resultado);