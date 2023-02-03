// Crear elementos al Local Storage

// Local Storage funciona con una especie de Llave valor...

// De igual manera los numeros se guardaran como strings.

// Como agregar elementos al localStorage:
localStorage.setItem('nombre', 'Ricardo');

// Como agregar elementos al sessionStorage:
sessionStorage.setItem('nombre', 'Ricardo');

// La diferencia entre ambos es que en sessionStorage solamnete se guardan datos
// por lo que estemos en secion en la pagina, si cerramos el navegador o salimos 
// esta, los datos se perderan. Esto no sucede con localStorage, los dato si permanecen.

// Local Storage solo soporta strings, no soporta arrays ni objetos 
// pero puedes almacenarlos convirtiendolos a string.
// De igual manera los numeros se guardaran como strings.

const producto = {
    nombre: "Monitor 2 pulgadas",
    precio: 3000
}

const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];

const mesesString = JSON.stringify( meses );
localStorage.setItem('meses', mesesString);