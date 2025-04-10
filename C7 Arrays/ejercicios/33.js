  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  function combine(str1, str2, str3) {
    let result = '';
    let maxLength = Math.max(str1.length, str2.length, str3.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < str1.length) result += str1[i]; // Agregar carácter de str1
      if (i < str2.length) result += str2[i]; // Agregar carácter de str2
      if (i < str3.length) result += str3[i]; // Agregar carácter de str3
    }
  
    return result;
  }
  
  module.exports = combine;
  