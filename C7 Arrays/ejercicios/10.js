function obtenerPrimerStringLargo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      return array[i]; 
    }
  }
  return undefined; 
}

module.exports = obtenerPrimerStringLargo;






