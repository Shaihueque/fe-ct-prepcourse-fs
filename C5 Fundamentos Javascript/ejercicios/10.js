function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  
    if(typeof fecha ==="string"){
      return !isNaN(Date.parse(fecha));
    }else if (fecha instanceof Date){
      return !isNaN(fecha.getTime());
    }else {
      return false;
    }
    //Me SALE UN ERROR
}

module.exports = esFechaValida;