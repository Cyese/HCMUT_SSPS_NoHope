const mongoose = require('mongoose');

const User = new mongoose.Schema({
    _UserCode: {
        required: true,
        type: String,
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

    }

});

module.exports = mongoose.model('user', User);
