const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true,
    },
    stipend: {
        type: Number,
        required: true,
    },
    stipendStatus: {
        type: String,
        default: "due"
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema)