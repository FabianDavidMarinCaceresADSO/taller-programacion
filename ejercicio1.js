function imprimirNumeros(desde, hasta) {

  let contador = desde;
  setTimeout(function numeros() {
    console.log(actual)
    if (contador < hasta) {
      setTimeout(numeros, 1000);
    }
    contador++;
  }, 1000);


}
  
imprimirNumeros(5, 10);

