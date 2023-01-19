// Eventos que suceden con el scroll del sitio web.

// Es muy común que muchos sitios agreguen funcionalidad 
// de que al dar scroll y llegar a ver un elemento este tenga 
// alguna animación, eso se hace con eventos en el mouse.

window.addEventListener('scroll', () => {

    // Detectar el Scrolling vertical...
    // console.log('scrolling...');
    // const pxScroll = window.scrollY;
    // console.log(pxScroll);

    // Detectar elemento "hospedaje" al dar scroll...
    const premium = document.querySelector('.hospedaje');

    // Este método te da el tamaño de un elemento y su 
    // ubicación respecto a la ubicación actual.
    const ubicacion = premium.getBoundingClientRect(); 
    console.log(ubicacion);

    if(ubicacion.top < 784) {
        console.log('Ya esta visible');
    } else {
        console.log('Aún no esta visible..')
    }

})