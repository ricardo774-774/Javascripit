// Veamos lo que se conoce como Traversing the DOM

// Todo en JavaScript esta conectado en el document, 
// la forma en que te moverás entre diferentes elementos se 
// le conoce como Traversing the DOM, ir recorriendolo..

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);

// Cada elemento en la navegación los diferentes elementos
// se les conoce como Nodos... y podrás listarlos de la 
// siguiente forma...
// console.log(navegacion.childNodes);

// La diferencia es que childNodes te va a mostrar hasta los 
// espacios en blanco, children te muestra solo los elementos...
// console.log(navegacion.children)
// console.log(navegacion.children[0])

// Hay mucha información aqui...
// console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
// console.log(navegacion.children[0].nodeName) // Que etiqueta es...

// Por ejemplo si selecciono el primer card...

// Conseguir texto
//  const card = document.querySelector('.card');
// console.log(card.children[1].children[1].textContent);

// Cambiar imagen
// card.children[0].src = 'img/hacer4.jpg';
// console.log(card.children[0]);

// parentElement recorre de hijo al padre
// console.log(card.parentElement.parentElement.parentElement);

// Recorre al siguiente hermano de arriba hacia abajo
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// Recorre al siguiente hermano de abajo hacia arriba
// console.log(ultimoCard.previousElementSibling);
// console.log(ultimoCard.previousElementSibling);
// console.log(ultimoCard.previousElementSibling);

// conseguir el primer hermano
// console.log(navegacion.firstChild);

// conseguir el ultimo hermano
// console.log(navegacion.lastChild);