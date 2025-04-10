function obtenerPrimerStringLargo(array) {
  // Recorremos el array para encontrar el primer string con 5 o más caracteres
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el string tiene 5 o más caracteres
    if (array[i].length >= 5) {
      return array[i]; // Si encontramos uno, lo devolvemos inmediatamente
    }
  }
  return undefined; // Si no encontramos ningún string largo, devolvemos undefined
}

module.exports = obtenerPrimerStringLargo;






