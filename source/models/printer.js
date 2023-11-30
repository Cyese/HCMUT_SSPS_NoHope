const mongoose = require('mongoose');
const Log = require('./log')
const Printer = new mongoose.Schema({
    PrinterID: {
        required: true,
        type: String
    },
    
    Location: {
        required: true,
        type: String
    },

    PaperLeft: {
        required: true,
        type: Number

    }
});

module.exports = mongoose.model('printer', Printer);
