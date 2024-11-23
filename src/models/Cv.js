const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DiplomeSchema = require('./Diplome');
const CertificationSchema = require('./Certification');
const FormationSchema = require('./Formation');
const JobSchema = require('./Job');
const MissionSchema = require('./Mission');
const CompagniesSchema = require('./Company');

const CvSchema = new Schema(
    {
        userid: {
            type: Schema.ObjectId,
            ref: 'CvUser',
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
            type: [DiplomeSchema],
            required: false
        },
        certifications: {
            type: [CertificationSchema],
            required: false
        },
        formations: {
            type: [FormationSchema],
            required: false
        },
        jobs: {
            type: [JobSchema],
            required: false
        },
        missions: {
            type: [MissionSchema],
            required: false
        },
        compagnies: {
            type: [CompagniesSchema],
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
