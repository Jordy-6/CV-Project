const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificationSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        issuedBy: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
    { _id: false }
);

module.exports = CertificationSchema;
