function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

let ultimoElemento = array[0];
  for(i=0; i<array.length; i++){
    ultimoElemento = array[i];
  }
  return ultimoElemento;
}

module.exports = devolverUltimoElemento;
