
const enlace = document.createElement('a');

// Añadiendo texto
enlace.textContent= 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';

// Añadiendo target
enlace.target = "_blank";

// añadieno data de enlace
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// añadieno class a nuevo enlace enlace
enlace.classList.add('alguna-clase');

// añadieno onclick de la funcion
enlace.onclick = miFuncion;

console.log(enlace.textContent);

// Seleccionar la navegacion
const navegacion = document.querySelector(".navegacion");

// Saber los elementos de nav para saber donde insertar 
console.log(navegacion.children);

// insertar "enlace" antes de: "navegacion.children[1]"
navegacion.insertBefore(enlace, navegacion.children[1]);

// creando la funcion
function miFuncion() {
    alert('Diste click');
}

// creando un CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Consierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Consierto de bad';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$3000 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info 
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen 
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

imagen.alt = "Texto de imagen";
// imagen con boostrap
// imagen.classList.add('img-fluid');


// Crear el card
const card = document.createElement('div');
card.classList.add('card');
// Asignar la imagen 
card.appendChild(imagen)
// Asignar la info del anterior div
card.appendChild(info)


// Insertar CARD en el HTML 
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);