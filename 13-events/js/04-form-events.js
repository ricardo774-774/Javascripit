// Veamos los eventos para un formulario, 
// básicamente es uno pero es muy importante 
// y merecia su propio video.

// Cuando envias un formulario usualmente lo que esta en el action,
// es la página que se abre...

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', e => {

     // PreventDefault es evitar que el navegador realice la 
     // acción por default, en este caso ir al action, 
     // "enviar info", "abrir enlace".
     // Usualmente utilizaras preventDefault para validar el formulario 
    // antes de enviarlo a un servidor.
    // Crear consultas Ajax entre otras cosas
    e.preventDefault();

    // Mucha información valiosa en e
    // console.log(e);

    // Esto nos muetra que tipo de metodo en 
    // este caso post
    console.log(e.target.method)

    // nos muestra a donde nos lleva por default enviar la info
    console.log(e.target.action)
})