function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  if(array.every(elemento => typeof elemento === 'number')){
    return array.sort((a, b) => a - b);
  }else if(array.every(elemento => typeof elemento === 'string')){
    return array.sort();
  } else {
    return array;
  }

 /* return array.sort((a, b) => a - b);*/
}

module.exports = ordenarArray;
