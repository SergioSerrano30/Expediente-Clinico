const req = require("express/lib/request");
const res = require("express/lib/response");
const { restart } = require("nodemon");
const Expediente = require("../models/Expediente");
//const Expediente = requiere('../models/Expediente.js');

exports.crearExpediente = async (req, res) => {
    try {
        let expediente;

        expediente = new Expediente(req.body);

        await expediente.save();
        res.send(expediente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerExpedientes = async (req,res) => {
    try {
        const expedientes = await Expediente.find();
        res.json(expedientes)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}
exports.actualizarExpediente = async (req,res)=> {
    try {
        const{curp,peso, altura, presion, padecimiento, medicacion, doctor} = req.body
        let expediente = await Expediente.findById(req.params.id);
        if(!expediente){
            res.status(404).json({msg: 'No existe el expediente'});
        }

        expediente.curp = curp;
        expediente.peso = peso;
        expediente.altura = altura;
        expediente.presion = presion;
        expediente.padecimiento = padecimiento;
        expediente.medicacion = medicacion;
        expediente.doctor = doctor;
        expediente = await Expediente.findOneAndUpdate({_id: req.params.id}, expediente,{new:true});
        res.json(expediente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerExpediente = async (req,res)=> {
    try {
        let expediente = await Expediente.findById(req.params.id);
        if(!expediente){
            res.status(404).json({msg: 'No existe el expediente'});
        }
        
        res.json(expediente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarExpediente = async (req,res)=> {
    try {
        let expediente = await Expediente.findById(req.params.id);
        if(!expediente){
            res.status(404).json({msg: 'No existe el expediente'});
        }
        
        await Expediente.findOneAndDelete({_id:req.params.id});
        res.json({msg: 'Expediente eliminado'});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}