// callback hell to promise...

const paises = [];

const nuevoPais = (pais) => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 3000);
})

// resultado contiene lo que retorna resolve:
// `Agregado: ${pais}`

nuevoPais(('Mexico'))
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Italia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
    })