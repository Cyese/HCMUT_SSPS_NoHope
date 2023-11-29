const mongoose = require('mongoose');
const Log = require('./log')
const Printer = new mongoose.Schema({
    _PrinterID: {
        required: true,
        type: String
    },
    
    _Location: {
        required: true,
        type: String
    },

    _PaperLeft: {
        required: true,
        type: Number

    },

    _History: {
        type: Array,
        ref: 'log'
    }
});

module.exports = mongoose.model('printer', Printer);
