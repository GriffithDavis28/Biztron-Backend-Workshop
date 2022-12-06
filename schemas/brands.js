const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({

    Img: {
        type: String,
        required: true
    }
});

const Brands = mongoose.model('Brand', BrandSchema);

module.exports = Brands;