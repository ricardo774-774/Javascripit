// new binding

/* También cuando creas un nuevo objeto con el
   object constructor tienes acceso a la palabra 
   this via un nuevo objeto con new */

function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// Window binding
// añade a la ventana global
window.color = 'azul';

function hola() {
    console.log(color);
}

hola();