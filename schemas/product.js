
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    Img: {
        type: String,
        require: true
    },
    product_name: {
        type: String,
        required: true    
    },
    MRP: {
        type: String,
        required: true
    },
    Selling_Price: {
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    },
    Featured_Product: {
        type: Boolean,
        required: false
    }
});

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;