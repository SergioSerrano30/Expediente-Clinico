const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");

const app = express();

//Conectar DB
conectarDB();
app.use(cors());
app.use(express.json())
app.use('/api/expedientes', require('./routes/expediente'));
app.use('/api/pacientes', require('./routes/paciente'));


app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
})