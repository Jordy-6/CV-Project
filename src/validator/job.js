const { Validator } = require('jsonschema');

const JobSchema = {
    type: 'object',
    properties: {
        title: { type: 'string', minLength: 1, errorMessage: 'Job title is required' },
        startYear: { type: 'number', errorMessage: 'Job starting year must be an integer' },
        endYear: { type: 'number', errorMessage: 'Job ending year must be an integer' }
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
