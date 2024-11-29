const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormationSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        institution: {
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

module.exports = FormationSchema;
