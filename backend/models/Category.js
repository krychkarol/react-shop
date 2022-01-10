const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        subcategory: {type: Array}
    },
    { timestamps: true}
);

module.exports = mongoose.model("category", CategorySchema);