const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        subcategory: {type: Array},
        order: {type: Number, required: true, default: 10},
        img: {type: String, required: true, default: 'https://via.placeholder.com/1/292929/FFFFFF/'}
    },
    { timestamps: true}
);

module.exports = mongoose.model("category", CategorySchema);