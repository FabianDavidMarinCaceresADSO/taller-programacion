const fs = require('fs');

// Función para cargar el archivo JSON
function cargarJSON(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Rechazar la Promise en caso de error
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData); // Resolver la Promise con los datos JSON
        } catch (error) {
          reject(error); // Rechazar la Promise si hay un error al analizar el JSON
        }
      }
    });
  });
}

// Llamada a la función para cargar el archivo JSON
cargarJSON('ejercicio23.js')
  .then((datos) => {
    console.log('Datos cargados correctamente:', datos);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo JSON:', error.message);
  });
