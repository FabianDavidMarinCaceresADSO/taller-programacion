async function operacionAsincronica() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "Operación completada";
}

operacionAsincronica().then(resultado => {
  console.log(resultado);
});
