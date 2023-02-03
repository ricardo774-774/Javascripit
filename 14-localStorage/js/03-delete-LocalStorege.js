// Eliminar lo datos de Local storage

// Eliminando el nombre
localStorage.removeItem('nombre');

const getName = localStorage.getItem('nombre');
console.log(getName);
// devolvera null ya que se removio antes con
// localStorage.removeItem()

// Eliminando todo el storage
// localStorage.clear();