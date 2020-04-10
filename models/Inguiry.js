
const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    message: {
        type: String,
        trim: true
    },
    newsletter: {
        type: String
    }
});

module.export = mongoose.model('Inguiry', inquirySchema);