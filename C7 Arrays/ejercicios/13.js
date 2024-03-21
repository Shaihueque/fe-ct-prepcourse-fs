function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let esPar = [];
  for(i=0; i < array.length; i++){
    if(array[i] % 2 === 0){
      esPar.push(array[i]);
    }
  }
  return esPar;
}

module.exports = filtrarNumerosPares;
