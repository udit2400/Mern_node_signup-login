const mongoose = require("mongoose");

const { Schema, model } = mongoose;
// console.log(mongoose);
const userSchema = new Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
        require: true,

    },
    year: {
        type: Number,
    },
    email: {
        type: String,
    },
    mobile_number: {
        type: Number,
    },
    password: {
        type: String,
    },
    dob: { type: Date },
    address: {
        street: { type: String },
        city: { type: String },
        pincode: { type: Number },
    },
});

const userModel = new model("users", userSchema);

module.exports = userModel;