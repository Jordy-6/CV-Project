const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema(
    {
        userid: {
            type: Schema.ObjectId,
            ref: 'User',
            required: false
        },
        cvid: {
            type: Schema.ObjectId,
            ref: 'Cv',
            required: false
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Recommendations = mongoose.model('User', RecommendationSchema);

module.exports = Recommendations;
