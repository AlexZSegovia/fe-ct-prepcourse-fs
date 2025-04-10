  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  function encontrarElementoRepetido(numeros) {
    const vistos = new Set();
    
    // Recorremos el arreglo
    for (let i = 0; i < numeros.length; i++) {
      // Si el número ya está en el conjunto, es el primer repetido
      if (vistos.has(numeros[i])) {
        return numeros[i];
      }
      
      // Si no está en el conjunto, lo agregamos
      vistos.add(numeros[i]);
    }
  
    // Si no se encuentra ningún repetido, retornamos undefined
    return undefined;
  }
  
  module.exports = encontrarElementoRepetido;
  