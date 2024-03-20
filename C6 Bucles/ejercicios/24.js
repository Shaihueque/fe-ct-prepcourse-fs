function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:

   //OPCION BUCLE SEGUN LA UNIDAD
   /*
      let textoInvertido = "";
      for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
      }
      return textoInvertido;
    */

      //OPCION 2 SIN BUCLE  Y MAS SIMPLE
      return texto.split('').reverse().join('');
}

module.exports = invertirTexto;
