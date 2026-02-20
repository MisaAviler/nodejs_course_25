import mongoose from 'mongoose';


export const coreSchema = new mongoose.Schema({
    total: Number,
    performance: Number,
    efficient: Number
}, {_id: false});

export const frequencyShema = new mongoose.Schema({
    base: Number,
    turbo: Number
}, {_id: false});

export const cacheShema = new mongoose.Schema({
    l2: String,
    l3: String
}, {_id: false});

export const tdpShema = new mongoose.Schema({
    base: Number,
    max: Number
}, {_id: false});

export const integratedGraphicsShema = new mongoose.Schema({
    model: String,
    baseFrequency: Number,
    maxFrequency: Number
}, {_id: false});
