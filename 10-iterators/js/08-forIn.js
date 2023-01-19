// for in...


let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}

// el for in va a iterar sobretodas las propiedades (llaves y valor) de un objeto,
// pero primero veamos como recorrer un arreglo con objetos...
for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}

console.log('///////////////////////////')

// conseguir las llaves y valor de un objeto for of
for(let [llave, valor] of Object.entries(automovil)) {
    console.log(`${llave} : ${valor}`);
}
