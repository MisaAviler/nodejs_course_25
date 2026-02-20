import mongoose from 'mongoose';


const maxFrequencyShema = new mongoose.Schema({
    DDR4: Number,
    DDR5: Number,
}, {_id: false});


export const memorySupportShema = new mongoose.Schema({
    type: [String],
    maxFrequency: {
        type: maxFrequencyShema,
        required: false
    },
    channels: Number,
    maxCapacity: String
}, {_id: false});

export const pciExpressShema = new mongoose.Schema({
    version: String,
    lanes: Number,
}, {_id: false});


export const warrantyShema = new mongoose.Schema({
    period: Number,
    manufacturer: String,
}, {_id: false});

export const priceShema = new mongoose.Schema({
    currency: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: false,
        min: 0,
        set: (v) => Math.round(v),
        get: (v) => v.toFixed(2)
    }
}, {_id: false});