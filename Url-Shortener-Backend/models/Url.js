const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true
    },
	originalUrl: {
        type: String,
        required: true
    },
	linkRedirectionCount: {
        type: Number,
        default: 0,
        required: true
    },
	generationDate: {
        type:Date,
        required:true,
        default:Date.now()
    }
})

module.exports = mongoose.model("Url", urlSchema);