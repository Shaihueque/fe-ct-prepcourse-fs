function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let masDiez = [];
  for(i=0; i < array.length; i++){
    if(array[i] > 10){
      masDiez.push(array[i]);
    }
  }
  return masDiez, masDiez.length;
}

module.exports = contarElementosMayoresA10;
