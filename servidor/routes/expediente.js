const express = require('express');
const router = express.Router();
const expedienteController = require('../controllers/expendienteController');

// api/expediente
/* router.post('/',()=>{
    console.log('Creando expediente...')
}) */
router.post('/',expedienteController.crearExpediente);
router.get('/',expedienteController.obtenerExpedientes);
router.put('/:id',expedienteController.actualizarExpediente);
router.get('/:id',expedienteController.obtenerExpediente);
router.delete('/:id',expedienteController.eliminarExpediente);

module.exports = router;