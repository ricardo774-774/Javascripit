// Factory Es una forma de crear objetos basados en cierta condición...

class InputHTML {
    constructor(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.tipo}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HtmlFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {
            case 'text':
                return new InputHTML('text', nombre);

            case 'tel':
                return new InputHTML('tel', nombre);

            case 'email':
                return new InputHTML('email', nombre);
    
            default:
                return;
        }
    }
}

const elemeto = new HtmlFactory();
const inputText = elemeto.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());

const elemeto2 = new HtmlFactory();
const inputText2 = elemeto2.crearElemento('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

const elemeto3 = new HtmlFactory();
const inputText3 = elemeto3.crearElemento('email', 'email-cliente');
console.log(inputText3.crearInput());