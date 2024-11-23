const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiplomeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

module.exports = DiplomeSchema;
