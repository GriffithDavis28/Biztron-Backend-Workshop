const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({

    Img: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Services = mongoose.model('Service', ServiceSchema);

module.exports = Services;