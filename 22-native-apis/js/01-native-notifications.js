// Notificaciones nátivas

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado)
        })
})

// nuestra notificación...
const verNotificacionBtn2 = document.querySelector('#verNotificacion');
verNotificacionBtn2.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        const notificacion = new Notification('Click aqui para ver', { 
            icon: 'img/logo-cafe.png',
            body: 'Bienvenido A Café De Ricardo.'
        });

        // Ir al sitio web de juan
        notificacion.onclick = function() {
            window.open('https://www.tripadvisor.com.mx/Restaurants-g659617-c8-Tlaquepaque_Guadalajara_Metropolitan_Area.html')
        }

    }
})