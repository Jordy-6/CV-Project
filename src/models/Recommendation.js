const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        id: {
            type: Schema.ObjectId,
            ref: 'CvUser',
            required: false
        }
    },
    { _id: false }
);

const RecommendationSchema = new Schema(
    {
        userid: {
            type: UserSchema,
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

const Recommendations = mongoose.model('Recommendation', RecommendationSchema);

module.exports = Recommendations;
