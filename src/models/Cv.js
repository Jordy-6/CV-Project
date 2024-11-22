const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CvSchema = new Schema(
    {
        userid: {
            type: Schema.ObjectId,
            ref: 'User',
            required: false
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        diplomes: {
            type: Array,
            required: false
        },
        certifications: {
            type: Array,
            required: false
        },
        formations: {
            type: Array,
            required: false
        },
        jobs: {
            type: Array,
            required: false
        },
        missions: {
            type: Array,
            required: false
        },
        compagnies: {
            type: Array,
            required: false
        },
        visible: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Cv = mongoose.model('Cv', CvSchema);

module.exports = Cv;
