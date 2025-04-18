function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
   if (str1.length !== str2.length) {
   return false;
}

  // Ordenar ambas cadenas y compararlas
   const ordenadoStr1 = str1.split("").sort().join("");
   const ordenadoStr2 = str2.split("").sort().join("");

   return ordenadoStr1 === ordenadoStr2;
}

module.exports = esAnagrama;
