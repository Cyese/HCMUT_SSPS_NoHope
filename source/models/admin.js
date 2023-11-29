const mongoose = require('mongoose')

const Admin = new mongoose.Schema({
    _Account:{
        type: String,
        required: true
    },
    _Password:{
        type: String,
        required: true
    }
})