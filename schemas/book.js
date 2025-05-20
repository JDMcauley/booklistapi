const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    productLink: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Book", bookSchema)