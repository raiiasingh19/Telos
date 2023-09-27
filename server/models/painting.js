const mongoose = require("mongoose");

const paintingSchema = mongoose.Schema(
    {
        image: String, 
        dimensions: String,
        medium: String,
        title: String,
        text: String,
        width: Number,
        height: Number
    },
    { timestamps: true }
);

const Painting = mongoose.model("Painting", paintingSchema);

module.exports = Painting;
