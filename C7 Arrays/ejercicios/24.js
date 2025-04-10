  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  function continueStatement(num) {
    // Creamos un arreglo vacío para almacenar los resultados
    let resultados = [];
    
    // Iteramos 10 veces
    for (let i = 1; i <= 10; i++) {
      // Si la iteración es 5, utilizamos continue para saltar a la siguiente iteración
      if (i === 5) {
        continue; // Esto salta el resto de las acciones para la iteración 5
      }
      num += 2; // Aumentamos en 2 el valor de num
      resultados.push(num); // Guardamos el valor actualizado de num en el arreglo
    }
  
    return resultados; // Retornamos el arreglo con los resultados
  }
  
  


module.exports = continueStatement;
