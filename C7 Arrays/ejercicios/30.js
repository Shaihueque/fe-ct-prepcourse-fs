function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let frecuencia = {};

  for(let i=0; i<numeros.length; i++){
    let numero = numeros[i];

    if(frecuencia[numero] !== undefined){
      return numero;
    }else{
      frecuencia[numero] = 1;
    }
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;