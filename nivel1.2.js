import mongoose, { Schema, model } from "mongoose";

// Esquema del Proveedor
const proveedorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre del proveedor es requerido'],
        min:4
    },
    direccion: {
        calle: { type: String, required: true },
        numero: { type: Number, required: true },
        piso: { type: Number, required: true },
        puerta: { type: String, required: true },
        ciudad: { type: String, required: true },
        codigoPostal: { type: String, required: true },
        pais: { type: String, required: true }
    },
    telefono: {
        type: String,
        required: true,
        min:9
    },
    fax: {
        type: String,
        required: true
    },
    nif: {
        type: String,
        required: true,
        min:9
    }
});

const Proveedor = model('Proveedor', proveedorSchema);

// Para las gafas
const gafasSchema = new Schema({
    marca: {
        type: String,
        required: true,
        min:3
    },
    graduacionVidrios: {
        ojoIzquierdo: { type: String, required: true },
        ojoDerecho: { type: String, required: true }
    },
    tipoMuntura: {
        type: String,
        enum: ['flotant', 'pasta', 'metàl·lica'],
        required: true
    },
    colorMuntura: {
        type: String,
        required: true
    },
    colorVidrios: {
        ojoIzquierdo: { type: String, required: true },
        ojoDerecho: { type: String, required: true }
    },
    precio: {
        type: Number,
        required: true
    },
    proveedor: {
        type: Schema.Types.ObjectId,
        ref: 'Proveedor',
        required: true
    }
});

const Gafas = model('Gafas', gafasSchema);

// De clientes
const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "Nombre es requerido"]
    },
    direccion: {
        calle: { type: String, required: true },
        numero: { type: Number, required: true },
        piso: { type: Number, required: true },
        puerta: { type: String, required: true },
        ciudad: { type: String, required: true },
        codigoPostal: { type: String, required: true },
        pais: { type: String, required: true }
    },
    telefono: {
        type: String,
        required: [true, "Telefono es requerido"],
        min:9
    },
    email: {
        type: String,
        required: [true, "Email es requerido"],
        min:5
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    clienteRecomendado: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    }
});

const Cliente = model('Cliente', clienteSchema);

// last shopping 
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

// Ventas
const ventaSchema = new Schema({
    gafas: {
        type: Schema.Types.ObjectId,
        ref: 'Gafas',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    empleado: {
        type: String,
        required: true
    },
    s
    fechaHoraVenta: {
        type: Date,
        default: Date.now
    }
});

const Venta = model('Venta', ventaSchema);

