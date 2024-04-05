function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  // Ordena el arreglo de números de menor a mayor- .sort ((a, b) => a - b) se utiliza para poner los numeros de menor a mayor
  numeros.sort((a, b) => a - b);

  
  for (let i = 0; i < numeros.length - 1; i++) {
    // Si la diferencia entre el número actual y el siguiente no es 1,
    // entonces encontramos el número faltante
    if (numeros[i + 1] - numeros[i] !== 1) {
      return numeros[i] + 1;
    }
  }

  return null;
}

module.exports = encontrarNumeroFaltante;