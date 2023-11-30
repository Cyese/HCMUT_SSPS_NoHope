const mongoose = require('mongoose');
const Log = require('./log');
const User = new mongoose.Schema({
    UserID: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    Name: {
        required: true,
        type: String,
    },

    PaperLeft: {
        required: true,
        type: Number
    },
    
    TotalUsed: {
        required: true,
        type: Number
    },
    
    Birthdate : {
        required : false,
        type: Date
    },

    Email: {
        required: true,
        type: String
    },    

    ContactNumber: {
        required: false,
        type: String
    }
});

module.exports = mongoose.model('user', User);
