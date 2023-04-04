// Composition
// Trata de utilizar funciones generales
// que se pueden utilizar en muchos objetos

//Ayuda a no utilizar heredacion.

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmial = info => ({
    agregarEmail(email) {
        console.log(`Email guardado en: ${info.nombre}`)
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(info.email);
    }
}) 

const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa,
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmial(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto,
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmial(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Ricardo', null , 'Mi Empresa');
cliente.mostrarNombre();
cliente.agregarEmail('Ricardo@gmail.com')
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Pedro', null , 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('Pedro@gmail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();