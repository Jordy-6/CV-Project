const { Validator } = require('jsonschema');

const JobSchema = {
    type: 'object',
    properties: {
        title: { type: 'string', minLength: 1, errorMessage: 'Job title is required' },
        startYear: { type: 'number', minimum: 1900, errorMessage: 'Job starting year is invalid or required' },
        endYear: { type: 'number', minimum: 1900, errorMessage: 'Job ending year is invalid' }
    },
    required: ['title', 'startYear']
};

const validateJob = (job) => {
    const validator = new Validator();
    const result = validator.validate(job, JobSchema);

    if (result.errors.length) {
        return result.errors.map((err) => err.schema.errorMessage || err.message).join(', ');
    }
    return null;
};

module.exports = validateJob;
