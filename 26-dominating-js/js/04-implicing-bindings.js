// implicing bindings.

// Implicit binding le dira de forma clara a la
// palabra this donde encontrar sus valores

const usuario = {
    nombre: 'Ricardo',
    edad: 20,
    informacion() {
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }, 
    mascota: {
        nombre: 'Dante',
        edad: 7, 
        informacion() {
            console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();