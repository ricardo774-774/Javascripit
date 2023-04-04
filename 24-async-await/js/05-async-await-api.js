// Async Await Con una API...

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// fetch api con promise
// function obtenerDatos() {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error));
// }

// fetch api con async/await pero sin error
async function obtenerDatos() {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
}

// fetch api con async/await pero sin error
async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

