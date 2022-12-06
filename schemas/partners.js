const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({

    Img: {
        type: String,
        required: true
    }
});

const Partners = mongoose.model('Partner', PartnerSchema);

module.exports = Partners;