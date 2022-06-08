const mongoose = require('mongoose');
const ExpedienteSchema = mongoose.Schema({

    curp: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    altura: {
        type: Number,
        required: true
    },
    presion: {
        type: Number,
        required: true
    },
    padecimiento: {
        type: String,
        required: true
    },
    medicacion: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
    

});
module.exports = mongoose.model('Expediente',ExpedienteSchema);