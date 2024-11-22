const { Validator } = require('jsonschema');

module.exports = {
    verifyCv: (cv) => {
        let validator = new Validator();
        let cvSchema = {
            type: 'object',
            properties: {
                userid: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: 'User ID is incorrect or missing'
                },
                firstname: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 20,
                    errorMessage: 'Firstname is missing or incorrect'
                },
                lastname: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 20,
                    errorMessage: 'Lastname is missing or incorrect'
                },
                description: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: 'Description is missing or incorrect'
                },
                diplomes: {
                    type: 'array',
                    items: { type: 'string' },
                    errorMessage: 'Diplomes should be an array of strings'
                },
                certifications: {
                    type: 'array',
                    items: { type: 'string' },
                    errorMessage: 'Certifications should be an array of strings'
                },
                formations: {
                    type: 'array',
                    items: { type: 'string' },
                    errorMessage: 'Formations should be an array of strings'
                },
                jobs: {
                    type: 'array',
                    items: { type: 'string' },
                    errorMessage: 'Jobs should be an array of strings'
                },
                missions: {
                    type: 'array',
                    items: { type: 'string' },
                    errorMessage: 'Missions should be an array of strings'
                },
                compagnies: {
                    type: 'array',
                    items: { type: 'string' },
                    errorMessage: 'Compagnies should be an array of strings'
                },
                visible: {
                    type: 'boolean',
                    errorMessage: 'Visibility status is missing or incorrect'
                }
            },
            required: ['firstname', 'lastname', 'description', 'visible']
        };
        let result = validator.validate(cv, cvSchema);

        // if validation failed
        if (Array.isArray(result.errors) && result.errors.length) {
            let failedInputs = '';

            result.errors.forEach((error) => {
                failedInputs += (error.schema.error || error.message) + ', ';
            });
            return {
                message: failedInputs
            };
        }
    }
};
