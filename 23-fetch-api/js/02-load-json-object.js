// Fetch API desde un JSON (Array)

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const url = 'data/empleado.json';

    fetch(url)
        .then( respuesta => {
            return respuesta.json();
        })
        .then( resultado => {
            console.log(resultado);
            return mostrarHTML(resultado);
        })
}

function mostrarHTML({ empresa, id, nombre, trabajo }){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Id: ${id} </p>
        <p>Nombre: ${nombre} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `;
}