const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MissionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = MissionSchema;
