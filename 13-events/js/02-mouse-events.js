// Eventos que ocurren con el mouse

// vamos a registrar el eventListener para el nav..
const nav = document.querySelector('.navegacion');

// para los clicks en nav
nav.addEventListener('click', () => {
    console.log('Click nav')
})

// para los hacer sencible al paso del cursor dentro de nav
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a navegacion')

// para poner el fondo del nav blanco cada que pase el cursor
    nav.style.backgroundColor = 'white';
});

// para hacer sencible al paso del cursor para salir de nav
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

// para poner el fondo del nav transparente cada que salga el cursor
    nav.style.backgroundColor = 'transparent';
})

// para los clicks en nav, como click, al presionar el click
nav.addEventListener('mousedown', () => {
    console.log('mousedown click');
})

// para los clicks en nav, al soltar el click
nav.addEventListener('mouseup', () => {
    console.log('mouseup click');
})

// para los doble clicks en nav
nav.addEventListener('dbclick', () => {
    console.log('doble click');
})
