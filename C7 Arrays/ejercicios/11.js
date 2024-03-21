function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let nuevoArray = [];
  for( i = 0; i < array.length; i++){
    nuevoArray.push(array[i]*2);
  }
  return nuevoArray;
}

module.exports = duplicarElementos;
