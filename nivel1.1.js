import {model, Schema} from "mongoose";

//Punto de vista de la interficie de cliente 1.1
const clientSchema = new Schema({
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
})

const clienteModel = model('cliente', clientSchema);

const lastShoppingSchema = new Schema({
    graduacion_izquierda:{
        type:Float,
        required:[true, "Graduacion Izquierda es requerido"],
    },
    graduacion_derecha:{
        type:Float,
        required:[true, "Graduacion Derecha es requerido"],
    },
    color_cristal_derecha:{
        type:String,
        required:[true, "El color del cristal de la derecha es requerido"],
    },
    color_cristal_izquierda:{
        type:String,
        required:[true, "El color del cristal de la izquierda es requerido"],
    },
    tipo_material:{
        type:String,
        required:true
    },
    precio:Float,
    cliente:{
        type:Schema.Types.ObjectId,
        ref:'cliente'
    }
})

const lastShoppingModel = model('shopping', lastShoppingSchema);