// Object.keys , Object.values , Object.entries, 
// estos son más conocidos como iteradores de objetos, 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// nos devolverá un arreglo con los keys del objeto
/* nombre, 
   precio,
   disponible */
console.log(Object.keys(producto));

// nos devolverá un arreglo con los valores del objeto
/* "Monitor 20 pulgadas"
   30
   true */
console.log(Object.values(producto)); 

// Entries nos va a retornar una matriz de llaves y valores
console.log(Object.entries(producto)); 