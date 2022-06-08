const mongoose = require('mongoose');
const PacienteSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    apellidoP: {
        type: String,
        required: true
    },
    apellidoM: {
        type: String,
        required: true
    },
    seguro: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    nacimiento: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
    

});
module.exports = mongoose.model('Paciente',PacienteSchema);