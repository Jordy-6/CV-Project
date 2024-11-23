const { Validator } = require('jsonschema');

const DiplomeSchema = {
    type: 'object',
    properties: {
        title: { type: 'string', minLength: 1, errorMessage: 'Diplome title is missing or invalid' },
        school: { type: 'string', minLength: 1, errorMessage: 'Diplome institution is missing or invalid' },
        year: { type: 'integer', minimum: 1950, errorMessage: 'Diplome year must be a valid year or is missing' }
    },
    required: ['title', 'institution', 'year']
};

const validateDiplome = (diplome) => {
    const validator = new Validator();
    const result = validator.validate(diplome, DiplomeSchema);

    if (result.errors.length) {
        return result.errors.map((err) => err.schema.errorMessage || err.message).join(', ');
    }
    return null;
};

module.exports = validateDiplome;
