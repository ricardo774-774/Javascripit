// Fetch API desde un JSON (Objeto)

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado));
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        let { empresa, id, nombre, trabajo } = empleado;

        html += `
        <p>Id: ${id} </p>
        <p>Nombre: ${nombre} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
        `;

    });

    contenido.innerHTML = html;
}