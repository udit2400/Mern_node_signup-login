const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
    p_id: {
        type: Number,
    },
    p_name: {
        type: String,
        required: true
    },
    p_details: {
        type: String,
    },
    p_image: {
        type: Object,
    },
    p_cat: {
        type: String,
    },
    p_price: {
        type: Decimal,
    },
    p_brand: {
        type: String,
    },
    p_status: {
        type: String,
        enum: ["active", "inactive", "deleted"]
    },
    p_variant: {
        type: Object,
    },

});

const productModel = new model("product", productSchema);
module.exports = productModel;