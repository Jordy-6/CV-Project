const { Validator } = require('jsonschema');

const MissionSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1, errorMessage: 'Mission name is missing or invalid' },
        description: { type: 'string', minLength: 1, errorMessage: 'Mission description is invalid' }
    },
    required: ['name']
};

const validateMission = (mission) => {
    const validator = new Validator();
    const result = validator.validate(mission, MissionSchema);

    if (result.errors.length) {
        return result.errors.map((err) => err.schema.errorMessage || err.message).join(', ');
    }
    return null;
};

module.exports = validateMission;
