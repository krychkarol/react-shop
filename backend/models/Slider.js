const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        img: {type: String, required: true, default: 'https://via.placeholder.com/500/'},
        desc: {type: String, required: true},
        path: {type: String, required: true}
    },
    { timestamps: true}
);

module.exports = mongoose.model("slider", SliderSchema);