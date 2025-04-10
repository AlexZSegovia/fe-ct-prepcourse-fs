function multiplicarArgumentos() {
  if (arguments.length === 0) {
    return 0; // Si no se pasan argumentos, retornamos 0.
  }

  let producto = 1;
  
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;
}

module.exports = multiplicarArgumentos;
