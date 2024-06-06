import mongoose, { Schema, model } from "mongoose";

// Proveedor
const proveedorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre del proveedor es requerido'],
        min: 4
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
        min: 9
    },
    fax: {
        type: String,
        required: true
    },
    nif: {
        type: String,
        required: true,
        min: 9
    }
});

const Proveedor = model('Proveedor', proveedorSchema);

// Gafas
const gafasSchema = new Schema({
    marca: {
        type: String,
        required: true,
        min: 3
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
        nombre: {
            type: String,
            required: [true, 'Nombre del proveedor es requerido'],
            min: 4
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
            min: 9
        },
        fax: {
            type: String,
            required: true
        },
        nif: {
            type: String,
            required: true,
            min: 9
        }
    },
    cliente:{
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
            min: 9
        },
        email: {
            type: String,
            required: [true, "Email es requerido"]
        },
        fechaRegistro: {
            type: Date,
            default: Date.now
        },
        clienteRecomendado: {
            type: Schema.Types.ObjectId,
            ref: 'Cliente'
        },
        lastshopping: {
            graduacionIzquierda: {
                type: Number,
                required: [true, "Graduación Izquierda es requerida"]
            },
            graduacionDerecha: {
                type: Number,
                required: [true, "Graduación Derecha es requerida"]
            },
            colorCristalDerecho: {
                type: String,
                required: [true, "El color del cristal derecho es requerido"]
            },
            colorCristalIzquierdo: {
                type: String,
                required: [true, "El color del cristal izquierdo es requerido"]
            },
            tipoMaterial: {
                type: String,
                required: true
            },
            precio: {
                type: Number,
                required: true
            },
        }
    }
});

const Gafas = model('Gafas', gafasSchema);

// Cliente
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
        min: 9
    },
    email: {
        type: String,
        required: [true, "Email es requerido"]
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    clienteRecomendado: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    lastshopping: {
        graduacionIzquierda: {
            type: Number,
            required: [true, "Graduación Izquierda es requerida"]
        },
        graduacionDerecha: {
            type: Number,
            required: [true, "Graduación Derecha es requerida"]
        },
        colorCristalDerecho: {
            type: String,
            required: [true, "El color del cristal derecho es requerido"]
        },
        colorCristalIzquierdo: {
            type: String,
            required: [true, "El color del cristal izquierdo es requerido"]
        },
        tipoMaterial: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
    }
});

const Cliente = model('Cliente', clienteSchema);

// Last Shopping
const lastShoppingSchema = new Schema({
    graduacionIzquierda: {
        type: Number,
        required: [true, "Graduación Izquierda es requerida"]
    },
    graduacionDerecha: {
        type: Number,
        required: [true, "Graduación Derecha es requerida"]
    },
    colorCristalDerecho: {
        type: String,
        required: [true, "El color del cristal derecho es requerido"]
    },
    colorCristalIzquierdo: {
        type: String,
        required: [true, "El color del cristal izquierdo es requerido"]
    },
    tipoMaterial: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cliente: {
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
            min: 9
        },
        email: {
            type: String,
            required: [true, "Email es requerido"]
        },
        fechaRegistro: {
            type: Date,
            default: Date.now
        },
        clienteRecomendado: {
            type: Schema.Types.ObjectId,
            ref: 'Cliente'
        },
        lastshopping: {
            graduacionIzquierda: {
                type: Number,
                required: [true, "Graduación Izquierda es requerida"]
            },
            graduacionDerecha: {
                type: Number,
                required: [true, "Graduación Derecha es requerida"]
            },
            colorCristalDerecho: {
                type: String,
                required: [true, "El color del cristal derecho es requerido"]
            },
            colorCristalIzquierdo: {
                type: String,
                required: [true, "El color del cristal izquierdo es requerido"]
            },
            tipoMaterial: {
                type: String,
                required: true
            },
            precio: {
                type: Number,
                required: true
            },
        }
    }
});

const LastShopping = model('LastShopping', lastShoppingSchema);

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
    fechaHoraVenta: {
        type: Date,
        default: Date.now
    }
});

const Venta = model('Venta', ventaSchema);