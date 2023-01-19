// Seleccionar elementos del DOM nos va a permitir
// modificar nuestro HTML y hacerlo más interactivo..

// Veamos por ejemplo como modificar el texto de la parte superior..

// Primero tenemos que seleccionarlo...

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Si deseas acceder al texto hay 3 formas de hacerlo.
// Diferencias: CSS - ( visibility: hidden )
console.log(encabezado.innerText);  // innerText no puede acceder a ese contenido...
console.log(encabezado.textContent); // textContent si encuentra el contenido
console.log(encabezado.innerHTML); // innerhTML trae el HTML.

// ahora también puedes tener algo de encadenamiento o chaining...
const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);

// Ahora, aquí puedes ver que estoy asignando el Texto a una variable, 
// pero también puedes modificarlo de diferentes formas...

const nuevoTexto2 = document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'
console.log(nuevoTexto2)
// otra opción seria con una variable.

const nuevoTexto = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;
console.log(nuevoTexto)

// También puedes cambiar una imagen...
const imagen = document.querySelector('.card img');
console.log(imagen.src);
// Cambiar la imagen...
imagen.src = 'img/hacer2.jpg';