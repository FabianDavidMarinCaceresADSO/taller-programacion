const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(7);
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((resultados) => {
    const suma = resultados.reduce((total, numero) => total + numero, 0);
    console.log("La suma de los números es:", suma);
  })
  .catch((error) => {
    console.log("Ocurrió un error:", error);
  });
