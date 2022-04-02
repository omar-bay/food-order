import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    img: {
        type: String,
        required: true,
        maxlength: 200
    },
    prices: {
        type: [Number],
        required: true,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200
    },
    extras: {
        type: [{
            text: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }]
    }
}, { timestamps: true })

export default mongoose.model.Product || mongoose.model("Product", ProductSchema)