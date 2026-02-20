import mongoose from 'mongoose';
import {coreSchema, frequencyShema, cacheShema, tdpShema, integratedGraphicsShema} from './subschemas.js';
import {memorySupportShema, pciExpressShema, warrantyShema, priceShema}  from './subschema_two.js'



const unitSchema = new mongoose.Schema({
    id: String,
    type: String,
    brand: {
        type: String,
        required: false,
        trim: true
    },
    model: String,
    series: String,
    generation: String,
    socket: String,
    architecture: String,
    cores: {
        type: coreSchema,
        requred: false
    },
    threads: Number,
    frequency: {
        type: frequencyShema,
        required: false
    },
    cache: {
        type: cacheShema,
        required: false
    },
    tdp: {
        type: tdpShema,
        required: false
    },
    integratedGraphics: {
        type: integratedGraphicsShema,
        required: false
    },
    memorySupport: {
        type: memorySupportShema,
        required: false
    },
     pciExpress: {
        type: pciExpressShema,
        required: false
    },
    technologies: [String],
    coolerIncluded: Boolean,
    unlockedMultiplier: Boolean,
    recommendedUsage: [String],
    dimensions: {
        package: String
    },
    warranty: {
        type: warrantyShema,
        required: false
    },
    price: {
        type: priceShema,
        required: false
    },
    availability:  {
        type: String,
        enum: ['in_stock', 'out_of_stock', 'preorder'],
        default: 'in_stock'
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    reviewsCount: Number
},{timestamps : true});


export default mongoose.model('Unit', unitSchema)

