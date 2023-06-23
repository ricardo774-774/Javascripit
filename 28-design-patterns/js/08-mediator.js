// Mediator
// Un intermediario es un design pattern que se comunica con
// distintos objetos a la vez.

// El mediator define objetos ya localizados para objetivos especificos.

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`${articulo} en venta, iniciamos con ${precio}`);
    },
    vendido: (articulo, comprador, precio) => {
        console.log(`${articulo} vendido a ${comprador}, por: ${precio}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador}: ${cantidad}`);
    }
}

function Subasta() {
    const compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Objetos
const ricardo = new  Comprador('Ricardo');
const roberto = new  Comprador('Roberto');
const vendedor = new  Vendedor('Vendedor de autos'); 
const subasta = new  Subasta();

// Registro
subasta.registrar(ricardo);
subasta.registrar(roberto);
subasta.registrar(vendedor);

vendedor.oferta('Tenis Jordan 1', 5000);
roberto.oferta(5500, 'Roberto');
ricardo.oferta(6000, 'Ricardo');
roberto.oferta(6500, 'Roberto');
ricardo.oferta(7000, 'Ricardo');
vendedor.vendido('Tenis Jordan 1','Ricardo', 7000);