// Previamente vimos los operadores ternarios, 
// llegan a ser muy útiles ya que te dan un código más simplificado, 
// veamos como se utilizan...

const autenticado = false;
const puedePagar = false

console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');


// El OR y el && también se pueden utilizar en el ternario

console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// Ternario anidado...

console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pgar' : 'No esta autenticado');

// Ternario anidado funcionaria como este if 
/*

 if(autenticado) {
    if (puedepagar) {
        'Si puede pagar'
    } else {
        'esta autenticado pero no puede pgar'
    }
 } else {
    'No esta autenticado'
 }

*/