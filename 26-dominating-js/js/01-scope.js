// Scope

// El Scope es el alcance de una variable, es decir, 
// que funciones o bloques de código tendrán acceso o 
// podrán conocer una variable una vez que es creada..

/** GLOBAL SCOPE */
const cliente = 'Ricardo';

function mostrarCliente() {
    const cliente = 'Ricardo Velez'; 
    console.log(cliente);
}
mostrarCliente();

function obtenerCliente() {
    const cliente = 'Ricardo Velez Calderon'; 
    console.log(cliente);
}
obtenerCliente();

/** Scope por bloque... */
const login = true;

function clienteLogueado() {

    const cliente = "Basic";
    console.log(cliente);

    if(login) {
        const cliente = 'Admin';
        console.log(cliente);
    }

}
clienteLogueado();