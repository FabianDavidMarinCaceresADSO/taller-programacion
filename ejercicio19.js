const fs = require('fs/promises');

async function obtenerInformacion() {
  try {
    // Realizar la llamada al archivo JSON
    const data = await fs.readFile('ejercicio19.json', 'utf-8');
    const jsonData = JSON.parse(data);

    // Manipular los datos recibidos para mostrar información específica
    const personas = jsonData.personas;
    personas.forEach((persona, index) => {
      console.log(`Persona ${index + 1}:`);
      console.log(`Nombre: ${persona.nombre}`);
      console.log(`Edad: ${persona.edad}`);
      console.log(`Ciudad: ${persona.ciudad}`);
      console.log();
    });
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error);
  }
}

// Llamar a la función para obtener información
obtenerInformacion();
