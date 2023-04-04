// Fetch API desde una API

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado));
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(dato => {
        let { id, author, post_url } = dato;

        html += `
            <p>Id: ${id}</p>
            <p>Autor: ${author}</p>
            <a href=${post_url}> Ver Imagen </a>
        `;

        contenido.innerHTML = html;
        console.log('cargando');
    });

}