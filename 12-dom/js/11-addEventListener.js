// desplegar class de forma condicional

const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');

// Para mandar a llamar mostrarOcultarFooter no es necesario () despues del nombre
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';
    }
}