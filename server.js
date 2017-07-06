const express = require('express');
const app = express();

//aquí  le decimos qque use los archivos estáticos y que se muestren al llamar a la ruta '/'
app.use('/', express.static('public'));

//aquí le decimos al framework desde que puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});