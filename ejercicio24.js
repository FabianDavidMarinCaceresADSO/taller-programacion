// Objeto original
const objetoOriginal = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Barcelona"
};

// Manejador del proxy
const manejador = {
  get: function (target, prop) {
    if (prop in target) {
      console.log(`Acceso a la propiedad "${prop}"`);
      return target[prop];
    } else {
      console.log(`La propiedad "${prop}" no existe en el objeto`);
      return undefined;
    }
  },
  set: function (target, prop, value) {
    console.log(`Asignando valor "${value}" a la propiedad "${prop}"`);
    target[prop] = value;
    return true;
  }
};

// Crear un objeto proxy
const proxyObjeto = new Proxy(objetoOriginal, manejador);

// Acceder a las propiedades del objeto a través del proxy
console.log(proxyObjeto.nombre); // Acceso a la propiedad "nombre" - imprime "Juan"
console.log(proxyObjeto.edad);   // Acceso a la propiedad "edad" - imprime 30

// Intentar acceder a una propiedad que no existe en el objeto original
console.log(proxyObjeto.profesion); // La propiedad "profesion" no existe en el objeto - imprime undefined

// Asignar un valor a una propiedad a través del proxy
proxyObjeto.ciudad = "Madrid"; // Asignando valor "Madrid" a la propiedad "ciudad"

// Verificar que el valor se haya asignado correctamente
console.log(proxyObjeto.ciudad); // Acceso a la propiedad "ciudad" - imprime "Madrid"
