// Parametros por default...

// Algunas veces mandaras llamar una función que no 
// tendrá los argumentos que se requieren, por ejemplo 
// cuando llenas tu perfil de facebook tal vez no llenas 
// todos los campos,   en esos casos son muy convenientes
// por parametros por default.

// nombre y apellido ya tienen un valor definido si es que no se manda 
// un valor a la hora de llamar la funcion, a esto se le conoce como
// parametros por default
function saludar(nombre = 'Desconocido', apellido = '') { 
    console.log( `Hola ${nombre}  ${apellido} ` );
}

// Juan y De la torre son argumentos y los valores que tomara la funcion
saludar('Juan', 'De la torre'); 

// Juan es un argumento que tomara la funcion
// Ya que es segundo valor lo tomara por default
// apellido = ''.
saludar('Juan');

// nombre = 'Desconocido', apellido = '' son los 
// valores que tomara la funcion ya que no le estamos 
// mandando argumentos
saludar();