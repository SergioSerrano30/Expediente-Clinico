const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.post('/',pacienteController.crearPaciente); //Agregar
router.get('/',pacienteController.obtenerPacientes); //Select *
router.put('/:id',pacienteController.actualizarPaciente); //Actualizar
router.get('/:id',pacienteController.obtenerPaciente); //Select por id
router.delete('/:id',pacienteController.eliminarPaciente); //Borrar

module.exports = router;