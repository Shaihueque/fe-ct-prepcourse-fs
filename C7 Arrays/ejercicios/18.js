function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var promedio = 0;
  var suma= 0;

  for(let i=0; i<resultadosTest.length; i++){
    suma += resultadosTest[i];
    promedio = suma / resultadosTest.length;
  }

  return promedio;
}

module.exports = promedioResultadosTest;
