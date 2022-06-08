const express = require('express');
const conectarDB = require('./config/db.js');
//const cors = require("cors");

const app = express();

//Conectar DB
conectarDB();
app.use('/api/expedientes', require('./routes/expediente'));
//app.use(cors());
//app.use(express.json());

/* app.get('/', (req,res)=>{
    res.send('Hola mundo')
}) */

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
})