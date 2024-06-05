import { model, Schema } from "mongoose";


//Punto de vista de la interficie gafas 1.2

const gafasSchema = new Schema({
    brand:{
        type:String,
        required:true,
        enum: ['Rayban', 'Hawkers', 'SergioBrandPro']
    },
    frame:{
        type:String,
        enum:['Metallic', 'Douradisima', 'Grisona', 'Blanca'],
        required:true
    },
    provider:{
        type:String,
        enum:["Vista Barcelona", "Gafas Perfectas S.L"],
        required:true 
    },
    price:{
        type:Float,
        required:true
    }
})

const gafasModel = model('gafas', gafasSchema);

const clienteSchema = new Schema({
    direccion:{
        type:String,
        required:[true, "Direccion es requerido"],
        min:4
    },
    telefono:{
        type:String,
        required:[true, "Telefono es requerido"],
    },
    email:{
        type:String,
        required:[true, "Email es requerido"],
        min:5
    },
    fecha_registro:Date,
    gafas_adquiridas:{
        type:Schema.Types.ObjectId,
        ref:'gafas'
    }
})

const clientesModel = model('cliente', clienteSchema);