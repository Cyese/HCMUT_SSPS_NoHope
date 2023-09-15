const mongoose = require('mongoose');
const User = require('./user')
const Printer = require('./printer')
const Log = new mongoose.Schema({
    _LogId: {
        required: true,
        type : mongoose.Schema.Types.ObjectId,
    },

    _RequestedBy: {
        required: true,
        ref: 'user'

    },

    _PrintedBy: {
        required: true,
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