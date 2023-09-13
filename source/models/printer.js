const mongoose = require('mongoose');

const Printer = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('printer', Printer);
