const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        subcategory: {type: Array},
        order: {type: Number, required: true, default: 10}
    },
    { timestamps: true}
);

module.exports = mongoose.model("category", CategorySchema);