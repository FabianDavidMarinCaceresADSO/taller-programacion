let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 10000000; j++) {
            
  i++;
}

/** la funcion programada se ejecuta despues del bucle y el aler va a mostrastras 10000000 */