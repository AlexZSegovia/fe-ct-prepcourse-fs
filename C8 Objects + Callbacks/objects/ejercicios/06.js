const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let totalPropiedades = 0;
  for (let propiedad in objeto) {
    totalPropiedades++;
    }
    return totalPropiedades;
};

module.exports = contarPropiedades;
