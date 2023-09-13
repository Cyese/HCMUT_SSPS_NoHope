const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    studentCode: {
        type: String,
    },

    name: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('student', Student);
