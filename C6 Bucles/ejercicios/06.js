function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  let strNum = num.toString();

  if(strNum.length === 3){
    return true;
  }else{
    return false;
  }
}

module.exports = tieneTresDigitos;
