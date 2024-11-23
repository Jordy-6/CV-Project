const { Validator } = require('jsonschema');

const FormationSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 2, errorMessage: 'Formation title is missing or invalid' },
        institution: { type: 'string', minLength: 1, errorMessage: 'Formation institution is missing or invalid' },
        year: { type: 'integer', minimum: 1950, errorMessage: 'Formation year must be valid or is missing' }
    },
    required: ['name', 'institution', 'year']
};

const validateFormation = (formations) => {
    const validator = new Validator();
    const result = validator.validate(formations, FormationSchema);

    if (result.errors.length) {
        return result.errors.map((err) => err.schema.errorMessage || err.message).join(', ');
    }
    return null;
};

module.exports = validateFormation;
