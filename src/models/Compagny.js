const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    industry: {
        type: String,
        required: false
    }
});

module.exports = CompanySchema;
