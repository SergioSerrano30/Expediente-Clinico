const req = require("express/lib/request");
const res = require("express/lib/response");
const { restart } = require("nodemon");
const Paciente = require("../models/Paciente");

exports.crearPaciente = async (req, res) => {
    try {
        let paciente;

        paciente = new Paciente(req.body);

        await paciente.save();
        res.send(paciente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerPacientes = async (req,res) => {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}
exports.actualizarPaciente = async (req,res)=> {
    try {
        const{nombre, apellidoP, apellidoM, seguro, correo, nacimiento, curp, password} = req.body
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente){
            res.status(404).json({msg: 'No existe el paciente'});
        }

        paciente.nombre = nombre;
        paciente.apellidoP = apellidoP;
        paciente.apellidoM = apellidoM;
        paciente.seguro = seguro;
        paciente.correo = correo;
        paciente.nacimiento = nacimiento;
        paciente.curp = curp;
        paciente.password = password;
        paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, paciente,{new:true});
        res.json(paciente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}
exports.obtenerPaciente = async (req,res)=> {
    try {
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente){
            res.status(404).json({msg: 'No existe el paciente'});
        }
        
        res.json(paciente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarPaciente = async (req,res)=> {
    try {
        let paciente = await Paciente.findById(req.params.id);
        if(!paciente){
            res.status(404).json({msg: 'No existe el paciente'});
        }
        
        await Paciente.findOneAndDelete({_id:req.params.id});
        res.json({msg: 'Paciente eliminado'});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error");
    }
}