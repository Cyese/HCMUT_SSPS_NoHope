const mongoose = require('mongoose');
const User = require('./user')
const Printer = require('./printer')
const Log = new mongoose.Schema({
    RequestedBy: {
        required: true,
        type :String,
        ref: 'user'
    },

    PrintedBy: {
        required: true,
        type: String,
        ref: 'printer'
    },

    Date: {
        required: true,
        type: Date,
    },

    FileName: {
        required: true,
        type: String,
    },

    PaperQuantity: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('log', Log);
