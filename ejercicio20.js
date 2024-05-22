const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primera Promise resuelta");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Segunda Promise resuelta");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tercera Promise resuelta");
  }, 4000);
});

Promise.all([promise1, promise2, promise3])
  .then((resultados) => {
    console.log("Todas las Promises se han resuelto:");
    resultados.forEach((resultado) => {
      console.log(resultado);
    });
  })
  .catch((error) => {
    console.log("Ocurrió un error:", error);
  });
