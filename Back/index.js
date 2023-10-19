const express = require("express"); // requerimos express
const app = express(); // aqui iniciamos la funcion
const port = process.env.PORT || 3001;


app.listen(port, () => { console.log('esta escuchando el puerto' + port)}) // aca la hacemos escuchar
