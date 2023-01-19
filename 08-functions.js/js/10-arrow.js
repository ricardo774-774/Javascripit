// Los arrow functions

// Los arrow functions son otra forma de declarar funciones 
// y fueron agregadas en las últimas versiones, la sintaxis es 
// más corta y cuando comencé a utilizarlas me parecian algo complejas,
// en este video y los siguientes te mostraré todo lo que tienes que saber
// de arrow functions

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}
aprendiendo();

const aprendiendo2 = () =>  {
    console.log('Aprendiendo JavaScript');
}
aprendiendo2();

// una linea no requiere llaves
const aprendiendo3 = () => console.log('Aprendiendo JavaScript');
aprendiendo3();

// retornar un valor
const aprendiendo4 = () => 'Aprendiendo JavaScript';
console.log(aprendiendo4());

