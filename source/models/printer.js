const mongoose = require('mongoose');

const Printer = new mongoose.Schema({
    _PrinterID: {
        type: String,
        required: true    
    },
    
    _Location: {
        type: String,
        required: true
    },

    _PaperLeft: {
        type: Number,
        required: true

    }
});

module.exports = mongoose.model('printer', Printer);
