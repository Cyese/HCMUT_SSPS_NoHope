const mongoose = require('mongoose');
const User = require('./user')
const Printer = require('./printer')
const Log = new mongoose.Schema({
    _RequestedBy: {
        required: true,
        type :String,
        ref: 'user'
    },

    _PrintedBy: {
        required: true,
        type: String,
        ref: 'printer'
    },

    _Date: {
        required: true,
        type: Date,
    },

    _FileName: {
        required: true,
        type: String,
    },

    _PaperQuantity: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('log', Log);
