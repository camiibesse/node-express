// Importar el módulo express
const express = require('express');

const app = express();
const PORT = 8080;


function getSaludo() {  
  let hora = new Date().getHours();
  let saludo = '';
  if (hora >= 6 && hora < 12) {
    saludo = 'Buenos días!';
  } else if (hora >= 13 && hora < 19) {
    saludo = 'Buenas tardes!';
  } else {
    saludo = 'Buenas noches!';
  }
  return saludo;
}

app.get('/hora', (req, res) => {
  let saludo = getSaludo();
  res.send(`<h2 style="color: blue">${saludo}</h2>`);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});