async function procesarLista(lista) {
  for (let i = 0; i < lista.length; i++) {
    try {
      // Procesar elemento de la lista uno por uno
      await procesarElemento(lista[i]);
      console.log(`Elemento ${i + 1} procesado correctamente.`);
    } catch (error) {
      console.log(`Error al procesar el elemento ${i + 1}: ${error.message}`);
    }
  }
}

// Ejemplo de una lista de elementos
const lista = [elemento1, elemento2, elemento3];

// Llamada a la función para procesar la lista
procesarLista(lista);
