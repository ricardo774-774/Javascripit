// Date()

// datos fecha actual 
const fechaActual = new Date();
console.log(fechaActual);

// datos fecha pasada 
// mes-dia-año
const fechaPasada = new Date('10-28-2002');
console.log(fechaPasada);

// datos año actual 
const añoActual = new Date().getFullYear();
console.log(añoActual);

// datos mes actual 
// inicia con el mes 0 = enero y así continua
const mesActual = new Date().getMonth();
console.log(mesActual);