function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }

  // Ordenamos el array para asegurar que los números estén en orden
  numeros.sort((a, b) => a - b);

  // Recorremos el arreglo y buscamos el número faltante
  for (let i = 0; i < numeros.length - 1; i++) {
    // Si la diferencia entre el número actual y el siguiente es mayor a 1, hay un número faltante
    if (numeros[i + 1] - numeros[i] > 1) {
      return numeros[i] + 1; // Devolvemos el número faltante
    }
  }

  // Si no encontramos ningún número faltante, retornamos null
  return null;
}

module.exports = encontrarNumeroFaltante;