  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  function mesesDelAño(array) {
    // Creamos un array vacío para almacenar los meses encontrados
    let mesesEncontrados = [];
    
    // Recorremos el array buscando los meses "Enero", "Marzo" y "Noviembre"
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        mesesEncontrados.push(array[i]);
      }
    }
    
    // Verificamos si se encontraron todos los meses pedidos
    if (mesesEncontrados.includes("Enero") && mesesEncontrados.includes("Marzo") && mesesEncontrados.includes("Noviembre")) {
      return mesesEncontrados; // Si encontramos los tres meses, los retornamos
    } else {
      return "No se encontraron los meses pedidos"; // Si no, retornamos el mensaje de error
    }
  }
  
  module.exports = mesesDelAño;
  
  
  



