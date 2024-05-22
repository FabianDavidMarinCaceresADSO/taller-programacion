const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primera Promise resuelta");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Segunda Promise rechazada"));
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tercera Promise resuelta");
  }, 4000);
});

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1}: Resuelta con valor "${result.value}"`);
      } else if (result.status === "rejected") {
        console.log(`Promise ${index + 1}: Rechazada con razón "${result.reason.message}"`);
      }
    });
  });
