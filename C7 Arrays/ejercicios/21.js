function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var tresMesesPedidos = ["Enero", "Marzo", "Noviembre"];
  var tresMesesEncontrados = [];

  for(let i=0; i<array.length; i++){
    if(tresMesesPedidos.includes(array[i]) ){
      tresMesesEncontrados.push(array[i]);
    }
  }

  if(tresMesesEncontrados.length === tresMesesPedidos.length){
    return tresMesesEncontrados;
  }else {
    return "No se encontraron los meses pedidos"
  }
}

module.exports = mesesDelAño;
