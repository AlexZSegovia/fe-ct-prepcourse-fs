  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  function encontrarPrimerMultiploDeN(n, secuencia) {
    // Recorremos la secuencia buscando el primer múltiplo de n
    for (let i = 0; i < secuencia.length; i++) {
      if (secuencia[i] % n === 0) {
        return secuencia[i]; // Si encontramos un múltiplo, lo retornamos
      }
    }
    return undefined; // Si no se encuentra ningún múltiplo, retornamos undefined
  }
  
  module.exports = encontrarPrimerMultiploDeN;