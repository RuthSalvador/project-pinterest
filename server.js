const express = require('express');
const app = express();

//aquí  le decimos qque use los archivos estáticos y que se muestren al llamar a la ruta '/'
app.use('/', express.static('public'));

//aquí le decimos al framework desde que puerto
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});