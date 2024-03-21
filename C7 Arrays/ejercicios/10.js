function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  let primerStringLargo = null;

  array.every(elemento => {
    if (typeof elemento === 'string' && elemento.length > 5) {
      primerStringLargo = elemento;
      return false;
    }
    return true;
  });
  return primerStringLargo;

}

module.exports = obtenerPrimerStringLargo;
