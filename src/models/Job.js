const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startYear: {
        type: Number,
        required: true
    },
    endYear: {
        type: Number,
        required: false
    }
});

module.exports = JobSchema;
