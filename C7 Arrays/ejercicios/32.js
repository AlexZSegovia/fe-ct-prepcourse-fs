function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
   // Eliminamos los espacios y convertimos el string a minúsculas
    let textoLimpio = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
   // Comparamos el texto limpio con su versión invertida
  return textoLimpio === textoLimpio.split('').reverse().join('');

}

module.exports = esPalindromo;