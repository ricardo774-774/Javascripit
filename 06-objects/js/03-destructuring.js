// Asignar variables hacia un objeto

const producto = {
    nombre: "Monitor 20 pulgadas", 
    precio: 30,
    disponible: true,
    premium: true,
    type: 'Electronic'
}


const nombre = producto.nombre;
console.log(nombre);


// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...
// Destructuring significa, sacar de una esctructura, puede ser complejo, 
// no lo es tanto sobretodo cuando lo practicas

const { disponible } = producto;
console.log(disponible);

// si deseas extraer más variables;
const { precio } = producto;
console.log(precio);


// O puedes hacerlo mejor en conjunto
const {premium, type} = producto;
console.log(premium, type);