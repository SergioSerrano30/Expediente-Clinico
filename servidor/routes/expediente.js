const express = require('express');
const router = express.Router();
const expedienteController = require('../controllers/expendienteController');

// api/expediente
/* router.post('/',()=>{
    console.log('Creando expediente...')
}) */
router.post('/',expedienteController.crearExpediente);

module.exports = router;