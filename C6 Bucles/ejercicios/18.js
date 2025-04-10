function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let resultado = 1;
  for (let i = a; i <= b; i++) {
    resultado *= i;
    }

    return Object.is(resultado, -0) ? 0 : resultado;
  }

module.exports = productoEntreNúmeros;