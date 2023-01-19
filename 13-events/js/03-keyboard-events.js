// Eventos que suceden con el teclado, es decir cuando 


const busqueda = document.querySelector('.busqueda');

// keydown  - cuando presionas una tecla 
// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...');
// })

// keyup - Cuando sueltas la tecla...
// busqueda.addEventListener('keyup', () => {
//     console.log('escribiendo...');
// })

// blur - cuando sales del input - ideal para validación...
// busqueda.addEventListener('blur', () => {
//     console.log('saliendo...');
// })

// copy - Cuando copias texto
// busqueda.addEventListener('copy', () => {
//     console.log('copiando...');
// })

// paste - Cuando copias texto
// busqueda.addEventListener('paste', () => {
//     console.log('pegando...');
// })

// cut - Cuando cortas texto
// busqueda.addEventListener('cut', () => {
//     console.log('cortado...');
// })

// input - cuando se ejecutan todas las que aquí se muestran.
// incluyendo cortar, pegar y copiar
// busqueda.addEventListener('input', () => {
//     console.log('haciendo input');
// })



// No tiene mucha utilidad enviar a la consola un mensaje 
// lo ideal seria saber el texto que se escribe o poderlo leer...

// busqueda.addEventListener('input', e => {
//     //console.log(e); // Información...
//     //console.log(e.type); // Te dira sobre en que elemento estamos trabajando...
//     //console.log(e.target); // el input completo html
//     //console.log(e.target.value) // cada letra que el usuario escribe...
// })

// con validacion para no tener un espacio vacio
// busqueda.addEventListener('input', e => {
//     if(e.target.value === '') {
//         console.log('Informacion requerida');
//     }
// })
