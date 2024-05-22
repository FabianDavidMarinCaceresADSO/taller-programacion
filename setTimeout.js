// setTimeout();

/*
const Saludar = setTimeout(function () {

  console.log("Hola jack");


  
}, 2000);

console.log("setTimeout");

*/
/*

function sayHi() {
  alert('Hola');
}

setTimeout(sayHi, 10000);

*/


/*
function sayHi(saludo, Nombre) {
  alert(saludo + ', ' + Nombre);
}

setTimeout(sayHi, 1000, "Hola", "John");

*/

//Escribe un programa en JavaScript que muestre un mensaje en la consola cada segundo durante 5 segundos,
// y luego muestre otro mensaje después de 2 segundos.


let Intervalid = function () {
  alert("Hola")
}

setInterval(Intervalid, 2000);



setTimeout(() => { clearTimeout(Intervalid); alert("adios"); }, 5000);


