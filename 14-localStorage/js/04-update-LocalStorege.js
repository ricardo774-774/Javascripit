// Actualizar lo datos de Local storage

const mesesArray = JSON.parse( localStorage.getItem('meses') );
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', mesesArray);