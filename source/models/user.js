const mongoose = require('mongoose');
const Log = require('./log');
const User = new mongoose.Schema({
    _UserID: {
        required: true,
        type: String
    },
    _password: {
        required: true,
        type: String
    },
    _Name: {
        required: true,
        type: String,
    },

    _PaperLeft: {
        required: true,
        type: Number
    },
    
    _TotalUsed: {
        required: true,
        type: Number
    },

    _History: {
        type: Array,
        ref: 'log'
    }
});

module.exports = mongoose.model('user', User);
