const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        category: {type: String, required: true},
        subcategory: {type: String, required: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        price: {type: Number, required: true},
        stock: {type: Number, required: true}
    },
    { timestamps: true}
);

module.exports = mongoose.model("product", ProductSchema);